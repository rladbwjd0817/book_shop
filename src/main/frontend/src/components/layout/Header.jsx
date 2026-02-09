import React from 'react'
import styles from './Header.module.css'
import Join from '../../pages/member/Join'
import { Link, useNavigate } from 'react-router-dom'
// 일반 사용자가 보는 페이지의 헤더 영역

const Header = () => {
  // const nav = useNavigate()

  return (
    <div>
      <div className={styles.top_menu}>
        {/* login, join */}
        <ul>
          <li>
            <Link to='/login'>Login</Link>
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
          BOOK SHOP
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