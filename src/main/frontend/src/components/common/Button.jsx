import React from 'react'
import styles from './Button.module.css'

const Button = ({
  title = '버튼', 
  variant = 'purple', 
  size = 'small', 
  ...props //구조분해할당 X, 위의 키 값들 빼고 나머지 키 값의 데이터를 다 받음.
}) => {
  return (
    <button 
    type='button'
    className={`
      ${styles.button} 
      ${styles[variant]}
      ${styles[size]}
    `}
    {...props}
    >
      {title}
    </button>
  )
}

export default Button