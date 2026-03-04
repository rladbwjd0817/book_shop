import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { selectBuyBook } from '../../api/buyApi';

const BuyList = () => {
  const params = useParams();

  // 구매한 도서목록 정보 저장할 state 변수
  const [buyBookList, setBuyBookList] = useState([]);

  console.log('buyBookList-', buyBookList);

  // email 저장할 변수
  const loginInfo = sessionStorage.getItem('loginInfo')
  const memEmail = JSON.parse(loginInfo).memEmail

  // 구매도서목록 조회 실행 함수
  const getBuyBookList = async () => {
    const response = await selectBuyBook(memEmail); 
    setBuyBookList(response.data);
    console.log(response.data);
  }

  // 마운트 될 때 조회
  useEffect(() => {getBuyBookList()}, []);

  // 구매 목록이 없으면 없다고 뜨기

  return (
    <div>
     <div>
        <span>{}</span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>도서 정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>구매 가격</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{buyBookList}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BuyList