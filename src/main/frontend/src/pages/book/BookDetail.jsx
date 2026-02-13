import React, { useEffect, useState } from 'react'
import EachBook from '../../components/book/EachBook'

const BookDetail = ({book}) => {
  // 조회한 도서 정보를 저장할 state 변수
  const [bookData, setBookData] = useState({});

  // 마운트했을 때 바로 출력
  useEffect(() => {}, [])

  // 도서 정보 조회 api 호출 함수
  const getBookData = () => {

  }

  return (
    <div>
      <div>
        <div>
         {/* 이미지 */}
        </div>
        <div>
          {/* 상품 정보 */}
          <p>도서 제목</p>
          <p>저자</p>
          <p>가격</p>
          <p>재고</p>
          <p>총 구매 가격</p>
        </div>
      </div>
      <div>
        {/* 상세 이미지 */}
      </div>
    </div>
  )
}

export default BookDetail