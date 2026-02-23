import React, { useEffect, useState } from 'react'
import EachBook from '../../components/book/EachBook'
import { getBookDetail } from '../../api/bookApi';
import { useParams } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import styles from './BookDetail.module.css'
import { BiColor } from 'react-icons/bi';
import { DiBlackberry } from 'react-icons/di';
import { TfiLayoutLineSolid } from "react-icons/tfi";

const BookDetail = () => {
  // 상세보기 하려는 도서번호
  const {bookNum} = useParams();

  // 조회한 도서 상세 정보를 저장할 state 변수
  const [bookInfo, setBookInfo] = useState({});

  console.log(bookInfo);

  // 마운트했을 때 상세 정보 조회
  useEffect(() => {
    getDetail();
  }, [])

  // 도서 상세 정보 조회 api 호출 함수
  const getDetail = async () => {
    const response = await getBookDetail(bookNum);
    setBookInfo(response.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.originImg}>
        <div>
          {
            bookInfo.bookImgList &&
            // bookInfo.bookImgList.map((e, i) => {
            //   if(e.isMain === 'Y'){
            //     return(
            //       <img key={i} src={`http://localhost:8080/upload/${e.uproadFileName}`}/>
            //     )
            //   }
            // })

            <img
              style={{width : 200}} 
              src={`http://localhost:8080/upload/${bookInfo.bookImgList.filter(e => {return e.isMain === 'Y'})[0].uproadFileName}`}
            />
          }
        </div>
        <div className={styles.info}>
          <div className={styles.detailInfo_div}>
            <p>{bookInfo.bookTitle}</p>
            <TfiLayoutLineSolid />
            <p>저자 : {bookInfo.author}</p>
            <p>가격 : {bookInfo.bookPrice && bookInfo.bookPrice.toLocaleString()}원</p>
            <Input 
              type='number'
              value={1} 
              onChange={e => {}}
            />
            <p>{bookInfo.totalPrice}</p>
            <p>총 구매 가격</p>
          </div>
          <div className={styles.btn_div}>
            <Button 
              title='장바구니에 담기'
              variant='green'
            />
            <Button 
              title='바로 구매'
              variant='green'
            />
          </div>
        </div>
      </div>
      <div className={styles.line_icons}>
        <TfiLayoutLineSolid />
      </div>
      <div>
        <p>{bookInfo.bookIntro}</p>
      </div>
      <div>
        {
            bookInfo.bookImgList &&
            // bookInfo.bookImgList.map((e, i) => {
            //   if(e.isMain === 'N'){
            //     return(
            //       <img key={i} src={`http://localhost:8080/upload/${e.uproadFileName}`}/>
            //     )
            //   }
            // })

            <img src={`http://localhost:8080/upload/${bookInfo.bookImgList.filter(e => {return e.isMain === 'N'})[0].uproadFileName}`}/>
          }
      </div>
    </div>
  )
}

export default BookDetail

