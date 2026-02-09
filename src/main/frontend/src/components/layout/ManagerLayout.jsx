import React from 'react'
import styles from './ManagerLayout.module.css'
import ManagerHeader from './ManagerHeader'
import ManageSide from './ManageSide'
import { Outlet } from 'react-router-dom'


// 쇼핑몰 운영자가 보는 화면, 매니저 헤더, 매니저 사이드로 3분할

const ManagerLayout = () => {
  return (
    <div className={styles.container}>
      <ManagerHeader />
      <div className={styles.main}>
        <div className={styles.side}>
          {/* 사이드메뉴 */}
          <ManageSide />
          
        </div>
        <div className={styles.content}>
          {/* 본문내용 */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ManagerLayout