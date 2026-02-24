import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import styles from './ManageSide.module.css'
import { FaFileArrowUp } from "react-icons/fa6";


const UserSide = () => {
  return (
    <div className={styles.container}>
          <div className={styles.mypage_sidemenu}>
            <ul>
              <li>
                <FaShoppingCart className={styles.icon}/>
                <p>장바구니</p>
              </li>
              <li>
                <IoReceiptOutline className={styles.icon}/>
                <p>구매내역</p>
              </li>
              <li>
                <FaFileArrowUp className={styles.icon}/>
                <p>내 정보 수정</p>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default UserSide