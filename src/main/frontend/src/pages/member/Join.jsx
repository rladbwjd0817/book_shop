import React from 'react'
import styles from './Join.module.css'
import { GoPerson } from "react-icons/go";


const Join = () => {
  return (
    <div className={styles.container}>
      <h2>
        <GoPerson 
        style={{
          fontSize : 40,
          
          textAlign : 'center'
        }}/>
        회원 가입
      </h2>
      <div className={styles.email}>
        {/* email */}
        <h3>Email</h3>
        <input type="text" />
        <button type='button'>중복확인</button>
      </div>
      <div className={styles.pw}>
        <h3>Password</h3>
        <input type="password" />
      </div>
      <div className={styles.confirmPw}>
        <h3>Confirm Password</h3>
        <input type="password" />
      </div>
      <div className={styles.name}>
        <h3>Name</h3>
        <input type="text" />
      </div>
      <div className={styles.tel}>
        <h3>Tel</h3>
        <div className={styles.tel_input}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>

      <div className={styles.addr}>
        <h3>Address</h3>
        <input type="text" />
        <button type='button'>검색</button>
        <input type="text" />
      </div>

      <div className={styles.joinBtn}>
        <button type='button'>회원가입</button>
      </div>
    </div>
  )
}

export default Join