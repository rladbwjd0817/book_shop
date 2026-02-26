import React, { useState } from 'react'

const CheckboxTest = () => {
  // 선택한 checkbox 데이터들을 저장할 state 변수
  const [fruits, setFruits] = useState(['apple', 'stw', 'redOrange'])

  // 전체 체크박스 체크 여부 데이터를 저장할 state 변수
  const [isChecked, setIsChecked] = useState(true);

  // 자바스크립트의 배열에 특정 데이터가 존재하는지 판단하기 위한 문법
  const arr = [1,2,3];

  // arr의 배열에 2가 포함되어 있니? 검사하는 코드
  const result = arr.includes(2);
  console.log(result);

  // 체크박스 변경 시 filter를 실행할 함수
  const handleCheckbox = (e) => {
    // 체크한 경우 e.target.cheked는 체크 됐을 때 true값을 반환
    if(e.target.checked){
      setFruits([...fruits, e.target.value])
    }
    // 체크를 해제 한 경우
    else{
      setFruits(fruits.filter(each => each !== e.target.value));
    }
  }

  console.log(fruits);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>
              <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => {
                  // 전체 체크박스 컨트롤
                  setIsChecked(e.target.checked);
                  
                  // 내용부의 체크박스 컨트롤
                  if(e.target.checked){
                    setFruits(['apple', 'stw', 'redOrange'])
                  }
                  else{
                    setFruits([]);
                  }
                }}
              />
            </td>
            <td>과일</td>
            <td>가격</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input 
                type="checkbox" 
                value='apple'
                checked={
                  // fruits 변수에 'apple'이 포함되어 있으면
                  fruits.includes('apple')}
                onChange={e => handleCheckbox(e)}
              />
            </td>
            <td>사과</td>
            <td>4,000원</td>
          </tr>
          <tr>
            <td>
              <input 
                type="checkbox" 
                value='stw'
                checked={fruits.includes('stw')}
                onChange={e => {handleCheckbox(e)}}
              />
            </td>
            <td>딸기</td>
            <td>9,800원</td>
          </tr>
          <tr>
            <td>
              <input 
                type="checkbox" 
                value='redOrange'
                checked={fruits.includes('redOrange')}
                onChange={e => {handleCheckbox(e)}}
              />
            </td>
            <td>레드향</td>
            <td>11,000원</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CheckboxTest