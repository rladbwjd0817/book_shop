import React, { useState } from 'react'
import BookForm from '../../pages/book/BookForm';
import styles from './EachBook.module.css'
import { useNavigate } from 'react-router-dom';

const EachBook = ({book}) => {
  const nav = useNavigate();

  // 천단위 구분 기호
  const money = 100000;
  console.log(money.toLocaleString());

  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img 
        
          src={`http://localhost:8080/upload/${book.bookImgList[0].uproadFileName}`}

          style={{
          width : '100%', height : '300px'
          }}


        />
        <div 
          className={styles.black_div}
          onClick={e => {nav(`/detail/${book.bookNum}`)}}
        ></div>
        <div className={styles.detail_label}>상세정보</div>
      </div>


      <p 
        style={{textAlign : 'center', margin: '0.5rem 0'}}
        >{book.bookTitle}</p>
      <p 
        style={{textAlign : 'center'}}
      >{book.bookPrice.toLocaleString()}원</p>
    </div>
  )
}

export default EachBook