import React, { useState } from 'react'
import styles from './Header.module.css'
import Join from '../../pages/member/Join'
import { Link, useNavigate } from 'react-router-dom'
// 일반 사용자가 보는 페이지의 헤더 영역

const Header = () => {
  
  // 로그인 여부 확인
  // json 타입으로 가져옴
  const info = sessionStorage.getItem('loginInfo');
  console.log('로그인 정보 - ', info)
  
  // json 데이터를 객체로 변환
  const info_obj = JSON.parse(info);
  console.log(info_obj);

  // login 글자 저장되어 있는 state 변수
  const [loginText, setLoginText] = useState('Login')

  // login이 되면 login글자가 logout글자로 바꾸는 함수
  const logout = () => {
    const result = sessionStorage.getItem() !== null ? 'Logout' : 'Login'
  }



  return (
    <div>
      <div className={styles.top_menu}>
        {/* login, join */}
        <ul>
          <li>
            <Link to='/login'>{loginText}</Link>
          </li>
          <li>
            Logout
          </li>
          <li>
            <Link to='/join'>Join</Link>
          </li>
        </ul>
      </div>

      <div className={styles.banner_div}>
        {/* 헤더 이미지 */}
        <img 
          className={styles.banner_img}
          src="/book_banner.PNG"
        />
        <h3 className={styles.banner_title}>
          <Link to= '/'>BOOK SHOP</Link>
        </h3>
      </div>

      <div>
        {/* 일반 사용자가 보는 메뉴 */}
        일반 사용자가 보는 메뉴
      </div>
    </div>
  )
}

export default Header