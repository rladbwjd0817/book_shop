import React from 'react'
import styles from './ManagerHeader.module.css'


const ManagerHeader = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src="/bookshop_logo.png" className={styles.logo}/>
        <ul>
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </div>
  )
}

export default ManagerHeader