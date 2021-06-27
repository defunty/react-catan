import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { clientState, fieldsState } from '../atoms/clientState';
import styled from '@emotion/styled'
import AreaSVG from './AreaSVG'

type Field = {resource: string, number: number}

const Map = () => {
  //const [fields, setFields] = useState<Field[]>([]);
  const [client, setClient] = useRecoilState<any>(clientState);
  const [fields, setFields] = useRecoilState<Field[]>(fieldsState);

  const clickRegenerateButton = () => {
    getRandomFields().then(randomFields => {
      //setFields(randomFields)
      client.send(JSON.stringify({
        type: "setFields",
        fields: randomFields
      }));
    });
  }

  async function getRandomFields(): Promise<Field[]> {
    const randomise = (array: any[]) => {
      const newArray = [];
      while (array.length > 0) {
        const n = array.length;
        const k = Math.floor(Math.random() * n);

        newArray.push(array[k]);
        array.splice(k, 1);
      }
      return newArray;
    }

    const resourceArray = [
      'brick','brick','brick',
      'ore','ore','ore',
      'grain','grain','grain','grain',
      'wood','wood','wood','wood',
      'wool','wool','wool','wool',
      'desert'
    ]
    const numberArray = [0,2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
    const randomResourceArray = randomise(resourceArray)
    const randomNumberArray = randomise(numberArray)

    const proc = (randomResourceArray: string[], randomNumberArray: number[]) => {
      const randomFields: Field[] = []

      let nullIndex: number = 0
      let nullResource: string = ''
      let desertIndex: number = 0
      let desertNumber: number = 0
      for(let i = 0; i<randomNumberArray.length; i++) {
        if (randomNumberArray[i] === 0) {
          nullIndex = i
          nullResource = randomResourceArray[i]
        }
        if (randomResourceArray[i] === 'desert') {
          desertIndex = i
          //desertNumber = randomNumberArray[i]
        }
        randomFields.push({number: randomNumberArray[i], resource: randomResourceArray[i]})
        if (i === randomNumberArray.length) {
          // desertが入っている箇所に0を入れ、0が入っている箇所にdesertの数値を入れる
          randomFields[nullIndex]['resource'] = nullResource
          randomFields[desertIndex]['number'] = 0
        }
      }
      return randomFields
    }
    const result = await proc(randomResourceArray, randomNumberArray)

    return result
  }



  return (
    <StyledRoot>
      <button className="RegenerateButton" onClick={() => {clickRegenerateButton()}}>Regenerate Map</button>
      { fields.length >= 1 &&
      <React.Fragment>
      <div className="Column">
        <AreaSVG number={fields[0]['number']} resource={fields[0]['resource']} />
        <AreaSVG number={fields[1]['number']} resource={fields[1]['resource']} />
        <AreaSVG number={fields[2]['number']} resource={fields[2]['resource']} />
      </div>
      <div className="Column">
        <AreaSVG number={fields[3]['number']} resource={fields[3]['resource']} />
        <AreaSVG number={fields[4]['number']} resource={fields[4]['resource']} />
        <AreaSVG number={fields[5]['number']} resource={fields[5]['resource']} />
        <AreaSVG number={fields[6]['number']} resource={fields[6]['resource']} />
      </div>
      <div className="Column">
        <AreaSVG number={fields[7]['number']} resource={fields[7]['resource']} />
        <AreaSVG number={fields[8]['number']} resource={fields[8]['resource']} />
        <AreaSVG number={fields[9]['number']} resource={fields[9]['resource']} />
        <AreaSVG number={fields[10]['number']} resource={fields[10]['resource']} />
        <AreaSVG number={fields[11]['number']} resource={fields[11]['resource']} />
      </div>
      <div className="Column">
        <AreaSVG number={fields[12]['number']} resource={fields[12]['resource']} />
        <AreaSVG number={fields[13]['number']} resource={fields[13]['resource']} />
        <AreaSVG number={fields[14]['number']} resource={fields[14]['resource']} />
        <AreaSVG number={fields[15]['number']} resource={fields[15]['resource']} />
      </div>
      <div className="Column">
        <AreaSVG number={fields[16]['number']} resource={fields[16]['resource']} />
        <AreaSVG number={fields[17]['number']} resource={fields[17]['resource']} />
        <AreaSVG number={fields[18]['number']} resource={fields[18]['resource']} />
      </div>
      </React.Fragment>
      }
      
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;

  .RegenerateButton {
    /*z-index: 100;*/
  }
  .Column {
    display: flex;
  }
`

export default Map;
