import React from 'react'
import styles from './ManagerLayout.module.css'
import Header from './Header'
import UserSide from './UserSide'
import { Outlet } from 'react-router-dom'

const UserLayout = ({setLoginInfo}) => {
  return (
    <div className={styles.container}>
      <Header setLoginInfo={setLoginInfo}/>
      <div className={styles.main}>
        <div className={styles.side}>
          {/* 사이드메뉴 */}
          <UserSide />
        </div>
        <div className={styles.content}>
          {/* 본문내용 */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout