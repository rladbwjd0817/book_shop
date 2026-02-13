import React, { useState } from 'react'
import styles from './Header.module.css'
import Join from '../../pages/member/Join'
import { Link, useNavigate } from 'react-router-dom'
// 일반 사용자가 보는 페이지의 헤더 영역

const Header = ({setLoginInfo}) => {
  const nav = useNavigate();

  // 로그인 여부 확인
  // json 타입으로 가져옴
  const info = sessionStorage.getItem('loginInfo');
  console.log('로그인 정보 - ', info)
  
  // json 데이터를 객체로 변환
  const info_obj = JSON.parse(info);
  console.log(info_obj);

  return (
    <div>
      <div className={styles.top_menu}>
        {/* login, join */}
        <ul>
          {/* 조건 */}
          {
            info == null 
            ?
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/join'>Join</Link>
              </li>
            </>
            :
            <>
              <li>{info_obj.memEmail}님 반갑습니다.</li>
              <li>장바구니</li>
              <li
                style={{cursor : 'pointer'}}
                onClick={e => {
                  sessionStorage.removeItem('loginInfo');
                  setLoginInfo({});
                  nav('/');
                }}
              >Logout</li>
            </>
          }


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