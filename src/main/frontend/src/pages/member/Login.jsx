import React, { useState } from 'react'
import Input from '../../components/common/Input'
import styles from './Login.module.css'
import { PiPlaceholder } from 'react-icons/pi'
import Button from '../../components/common/Button'

import { goLogin } from '../../api/memberApi'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoginInfo, loginInfo}) => {
  // useNavigate로 페이지 이동
  const nav = useNavigate();

  // input태그에서 입력한 데이터를 저장할 state변수 생성
  const[info, setInfo] = useState({
    memEmail : '',
    memPw : ''
  });

  // 입력할 때마다 실행할 함수
  const handleInfo = (e) => {
    setInfo(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  

  // 로그인 버튼 클릭 시 실행하게 하는 함수
  const getLogin = async () => {
    const response = await goLogin(info);
    // spring에서 null이 리턴되면 리액트에서는 빈문자로 전달받음
    // 로그인 가능하면
    if(response.data !== ''){
      alert('로그인 성공^0^!!!');

      // login한 회원의 이메일, 이름, 권한 정보를 가진 변수
      const loginInfo = {
        memEmail : response.data.memEmail,
        memName : response.data.memName,
        memRole : response.data.memRole,
      }

      // 로그인 정보를 sessionStorage에 저장하기 위해서 json(객체를 문자화)으로 변경
      // JSON.stringify(객체); -> 객체를 json으로 변경
      // JSON.parse(json); -> json 데이터를 객체로 변경


      // Session Storage에 로그인한 유저 정보를 저장
      sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
      
      // app component에서 만든 loginInfo 변수에 로그인 정보를 저장
      setLoginInfo(loginInfo);

      // 일반 유저 -> 도서목록 페이지로 이동
      // 매니저 -> 상품 등록 페이지로 이동

      if(loginInfo.memRole === 'USER'){
        nav('/');
      }else{
        nav('/manage/book-form')
      }

      // nav(loginInfo.memRole === 'USER' ? '/' : '/manage/book-form');

      
    }  else{
      alert('어이쿠 로그인 실패했네?!!!!');

      // 입력 데이터 초기화
      setInfo({
        memEmail : '',
        memPw : ''
      })
    }

  }

  console.log(info);

  return (
    <div className={styles.container}>
      로그인 페이지이지롱
      <div>
        {/* id 입력 */}
        <Input 
          placeholder= 'id를 입력하세요' 
          name= 'memEmail'
          value= {info.memEmail}
          onChange= {e => {handleInfo(e)}}
        />
      </div>
      <div>
        {/* pw 입력 */}
        <Input
          type='password' 
          placeholder= 'Password를 입력하세요'
          name= 'memPw'
          value= {info.memPw}
          onChange= {e => {handleInfo(e)}}

          // 키보드 엔터 입력 시 로그인 기능 실행
          onKeyDown={e => {
            if(e.key === 'Enter'){
              goLogin();
            }
          }} //키보드 누를 때 실행

        />
      </div>
      <div>
        {/* 로그인 버튼 클릭 */}
        <Button 
          title='로그인'
          variant='green'
          onKeyDown={e=>{}}
          onClick= {e => {
            if(loginInfo.memRole === 'Manager'){
              loginManage()
            }else{
              getLogin()
            }
          }}
        />
      </div>

    </div>
  )
}

export default Login