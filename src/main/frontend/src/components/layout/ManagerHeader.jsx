import React from 'react'
import styles from './ManagerHeader.module.css'
import { Link, useNavigate } from 'react-router-dom';


const ManagerHeader = ({setLoginInfo}) => {
  const nav = useNavigate();

  const info = sessionStorage.getItem('loginInfo');
  const info_obj = JSON.parse(info);
  console.log(info_obj);

  

  return (
    <div>
      <div className={styles.container}>
        <Link to='/'>
          <img 
            src="/bookshop_logo.png" className={styles.logo}
            style={{cursor : 'pointer'}}
          />
        </Link>
        <ul>
          {/* 로그인 되면 로그아웃으로 바꾸기 */}
          {
            info == null
            ?
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li 
                style={{cursor : 'pointer'}}>
                <Link to='/join'
              >Join</Link>
              </li>
            </>
            :
            <>
              <li>{info_obj.memRole}님 반갑습니다.</li>
              <li
                style={{cursor : 'pointer'}}
                onClick={e => {
                  sessionStorage.removeItem('loginInfo')
                  setLoginInfo({})
                  nav('/')
                }}
              >Logout</li>
            </>
            
          }
        </ul>
      </div>
    </div>
  )
}

export default ManagerHeader