import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { selectBuyBook } from '../../api/buyApi';
import ListTable from '../../components/common/ListTable'
import styles from './BuyList.module.css'
import dayjs from 'dayjs';

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

    // 조회한 데이터 state변수에 저장
    setBuyBookList(response.data);

    // 조회한 데이터 출력
    console.log(response.data);
  }

  // 마운트 될 때 조회
  useEffect(() => {getBuyBookList()}, []);

  // 구매 목록이 없으면 없다고 뜨기

  return (
    <div className={styles.container}>
      {
        buyBookList.length === 0 
        ?
        <p className={styles.not_buy}>구매 내역이 존재하지 않습니다.</p>
        :
        buyBookList.map((buy, i) => {
          return (
            <div className={styles.buyInfo} key={i}>
              <div className={styles.buy_header}>
                <p>{buyBookList.length - i} |</p>
                <p>{
                  buy.detailList[0].bookDTO.bookTitle} 
                  
                  {
                    buy.detailList.length > 1 && 
                    <> 외 {buy.detailList.length -1}개</>
                  }
                  
                </p>
                <p>{buy.buyPrice.toLocaleString()}원</p>
                <p>{dayjs(buy.buyDate).format('YYYY-MM-DD HH:mm')}</p>
              </div>
              <div className={styles.buy_content}>
                <ListTable>
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
                    {
                      buy.detailList.map((detail, j) => {
                        return(
                          <tr key={j}>
                            <td>{buy.detailList.length - j}</td>
                            <td className={styles.flex_td}>
                              <img src={`http://localhost:8080/upload/${detail.bookDTO.bookImgList[0].uproadFileName}`}/>
                              <p>{detail.bookDTO.bookTitle}</p>
                            </td>
                            <td>{detail.bookDTO.bookPrice.toLocaleString()}원</td>
                            <td>{detail.buyCnt}</td>
                            <td>{(detail.bookDTO.bookPrice * detail.buyCnt).toLocaleString()}원</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </ListTable>
              </div>
            </div>
          )
        })
      }




     
    </div>
  )
}

export default BuyList