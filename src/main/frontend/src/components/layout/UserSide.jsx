import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import styles from './ManageSide.module.css'
import { FaFileArrowUp } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

// <NavLink to='이동할 url' className={(param) => {}}>
// NavLink 컴포넌트의 className props에는 화살표 함수가 들어온다
// 화살표 함수의 매개변수를 출력하면 다음과 같은 데이터를 얻을 수 있음
// {isActive: true, isPending: false, isTransitioning: false}
// isAcvtice key의 value는 해당 메뉴가 선택됐을 때는 true, 그렇지 않으면 false값을 가짐


const UserSide = () => {
  return (
    <div className={styles.container}>
          <div className={styles.mypage_sidemenu}>
            <ul>
              <li>
                <FaShoppingCart className={styles.icon}/>
                <NavLink 
                  to={'/my/cart-list'}
                  className={param => param.isActive ? styles.active : ''}
                >
                  <p>장바구니</p>
                </NavLink>
              </li>
              <li>
                <IoReceiptOutline className={styles.icon}/>
                <NavLink 
                  to={'/my/buy-list'}
                  className={param => param.isActive ? styles.active : ''}
                >
                  <p>구매내역</p>
                </NavLink>
              </li>
              <li>
                <FaFileArrowUp className={styles.icon}/>
                <NavLink 
                  to={'/my/my-page'}
                  className={param => param.isActive ? styles.active : ''}
                >
                  <p>내 정보 수정</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default UserSide