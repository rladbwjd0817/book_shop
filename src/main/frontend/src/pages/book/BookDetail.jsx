import React, { useEffect, useState } from 'react'
import EachBook from '../../components/book/EachBook'
import { getBookDetail } from '../../api/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import styles from './BookDetail.module.css'
import { BiColor } from 'react-icons/bi';
import { DiBlackberry } from 'react-icons/di';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { regCart } from '../../api/cartApi';

const BookDetail = () => {
  const nav = useNavigate();
  // 상세보기 하려는 도서번호
  const {bookNum} = useParams();

  // 조회한 도서 상세 정보를 저장할 state 변수
  const [bookInfo, setBookInfo] = useState({});

  console.log(bookInfo);

  // 수량과 총가격을 저장할 state 변수
  const [cntAndPrice, setCntAndPrice] = useState({
    cnt : 1,
    price : 0
  });


  // 마운트했을 때 상세 정보 조회
  useEffect(() => {
    getDetail();
  }, [])

  // 도서 상세 정보 조회 api 호출 함수
  const getDetail = async () => {
    const response = await getBookDetail(bookNum);
    setBookInfo(response.data);

    setCntAndPrice({
      ...cntAndPrice,
      price : response.data.bookPrice
    })
  }

  // 장바구니 담기 버튼 클릭 시 cart추가 실행 함수
  const addCart = async () => {
    // 로그인 여부 확인
    const loginInfo = sessionStorage.getItem('loginInfo');
    if(loginInfo === null){
      const result = confirm('장바구니에 상품을 담으려면 로그인이 필요합니다. \n로그인 하실라우?')

      if(result){
        nav('/login')
      }
      return ;
    }

    // 장바구니 등록
    insertCart();
  };

  // 장바구니 등록 함수
  const insertCart = async () => {
    const loginInfo = sessionStorage.getItem('loginInfo');
    const loginInfo_obj =  JSON.parse(loginInfo);

    const data = {
      bookNum : bookInfo.bookNum,
      cartCnt : cntAndPrice.cnt,
      memEmail : loginInfo_obj.memEmail
    };

    const response = await regCart(data);
    if(response.status === 201){
      const result = confirm('장바구니에 상품을 담았습니다. \n장바구니 페이지로 이동하시겠습니까?');
      if(result){
        // 장바구니 목록페이지 이동
        nav('/my/cart-list')
      }
    } else{
      alert('어이쿠 오류가 발생했습니다!')
    }
  }

  // 수량 변경 시 실행 함수
  const handleCntAndPrice = (e) =>{
    // 만약 숫자가 아닌 문자열이 입력되면 입력된 문자열을 빈 문자열로 변경
    let cntValue = e.target.value.replace(/[^0-9]/g, '')

    // 빈 문자열일 경우 1로 변경
    cntValue = cntValue === '' ? '1' : cntValue;

    setCntAndPrice({
      cnt : cntValue, 
      price : bookInfo.bookPrice * Number(cntValue)
    })
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
        <div className={styles.info_div}>
          <div className={styles.info}>
            <p>{bookInfo.bookTitle}</p>
            <p>저자 : {bookInfo.author}</p>
            <p>가격 : {bookInfo.bookPrice && bookInfo.bookPrice.toLocaleString()}원</p>
            <Input 
              type='text'
              name='' 
              value={cntAndPrice.cnt}
              onChange={e => {handleCntAndPrice(e)}}
            />
            <p>총 구매 가격 : {cntAndPrice.price.toLocaleString()}원</p>
          </div>
          <div className={styles.btn_div}>
            <Button 
              title='장바구니에 담기'
              variant='green'
              onClick={e => {addCart()}}
            />
            <Button 
              title='바로 구매'
              variant='green'
            />
          </div>
        </div>
      </div>
      <div className={styles.detailInfo_div}>
        <p>{bookInfo.bookIntro}</p>
      </div>
      <div className={styles.subImg}>
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

