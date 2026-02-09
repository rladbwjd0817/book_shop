import React from 'react'
import Input from '../../components/common/Input'
import styles from './Login.module.css'
import { PiPlaceholder } from 'react-icons/pi'
import Button from '../../components/common/Button'

const Login = () => {
  return (
    <div className={styles.container}>
      로그인 페이지이지롱
      <div>
        {/* id 입력 */}
        <Input placeholder = 'id를 입력하세요' />
      </div>
      <div>
        {/* pw 입력 */}
        <Input
          type='password' 
          placeholder = 'Password를 입력하세요'
        />
      </div>
      <div>
        {/* 로그인 버튼 클릭 */}
        <Button 
          title='로그인'
          variant='green'
        />
      </div>
    </div>
  )
}

export default Login