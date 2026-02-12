import React from 'react'


// Web Stroage(cookie, localstorage, sessionstorage)에는 문자열 데이터만 저장 가능
const Webstorage = () => {
  // Local Storage에 데이터를 저장
  localStorage.setItem('local-name', 'kim');
  localStorage.setItem('local-age', '20');

  // Local Storage에 저장된 데이터읽기
  localStorage.getItem('local-name'); //kim;
  localStorage.removeItem('local-age'); //key가 local-age인 데이터 삭제

  // session Storage에 데이터를 저장
  sessionStorage.setItem('session-name', 'lee');
  sessionStorage.setItem('session-age', '23');

  // session Sttorage에 저장된 데이터읽기
  sessionStorage.getItem('session-age');
  sessionStorage.removeItem('session-name');

  
  return (
    <div>Webstorage</div>
  )
}

export default Webstorage