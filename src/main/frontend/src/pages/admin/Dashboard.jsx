import React, { use, useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import ListTable from '../../components/common/ListTable'
import { IoReceiptOutline } from "react-icons/io5";
import { BiWon } from "react-icons/bi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { saleInfo, selectBookRank, selectBuyRank, selectChartData } from '../../api/buyApi';


const Dashboard = () => {
  // 오늘,이달의 주문건수 및 매출금액을 저장할 state 변수 생성 t= saleInfo
  const [saleResult, setSaleResult] = useState({});

  // 구매랭킹 데이터를 저장할 state 변수 생성 t=topBuyer
  const [buyRank, setBuyRank] = useState([]);

  // 인기도서 랭킹 데이터를 저장할 state 변수 생성 t=topBook
  const [bookRank, setBookRank] = useState([]);

  // 차트 데이터를 저장할 state변수 생성 t=saleTen
  const [chartData, setChartData] = useState([])

  // 주문건수 및 매출금액 조회 실행 함수
  const getSaleResult = async () => {
    const response = await saleInfo();
    console.log(response.data);
    setSaleResult(response.data);
  }

  console.log('오늘, 이달의 주문건수 및 매출금액 - ', saleResult);

  // 구매랭킹 조회 실행 함수
  const getBuyRank = async () => {
    const response = await selectBuyRank();
    console.log(response.data);
    setBuyRank(response.data);
  }

  console.log('구매랭킹 -', buyRank);

  // 인기도서 랭킹 조회 실행 함수
  const getBookRank = async () => {
    const response = await selectBookRank()
    console.log(response.data);
    setBookRank(response.data);
  }
  
  console.log('인기도서랭킹 -', bookRank);

  // 차트조회 실행 함수
  const getChart = async () => {
    const response = await selectChartData();
    console.log(response.data);
    setChartData(response.data);
  }

  console.log('차트 데이터 - ', chartData)

  // 마운트되면 바로 조회
  useEffect(() => {getSaleResult()}, [])
  useEffect(() => {getBuyRank()}, [])
  useEffect(() => {getBookRank()}, [])
  useEffect(() => {getChart()}, [])

  return (
    <div className={styles.container}>
      <div>
        {/* 건수, 매출금액 표시 */}
        <div className={styles.result}>
          <div>
            <p>
              <IoReceiptOutline />
              오늘의 주문건수
            </p>
            <p>{saleResult.saleCntToday}</p>
          </div>
          <div>
            <p>
              <MdOutlineCalendarMonth />
              이 달의 주문건수
            </p>
            <p>{saleResult.saleCntMonth}</p>
          </div>
          <div>
            <p>
              <BiWon />
              오늘의 매출 금액
            </p>
            <p>{saleResult.saleToday}</p>
          </div>
          <div>
            <p>
              <MdOutlineCalendarMonth />
              이 달의 매출금액
            </p>
            <p>{saleResult.saleMonth}</p>
          </div>
        </div>
      </div>
      <div>b 차트공간</div>
      <div className={styles.table_div}>
        <p>TOP 5 구매 랭킹</p>
          <ListTable className={styles.buy_rank}>
            <colgroup>
              <col width='15%'/>
              <col width='*'/>
              <col width='30%'/>
              <col width='30%'/>
            </colgroup>
            <thead>
              <tr>
                <td>랭킹</td>
                <td>이메일</td>
                <td>구매 건수</td>
                <td>구매 금액</td>
              </tr>
            </thead>
            <tbody>
              {
                buyRank.map((buyRank, i) => {
                  return(
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{buyRank.memEmail}</td>
                      <td>{buyRank.saleCntPerMember}</td>
                      <td>{buyRank.salePerMember}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </ListTable>
      </div>
      <div>
        <p>TOP 5 인기 도서 랭킹</p>
          <ListTable className={styles.book_rank}>
            <colgroup>
              <col width='15%'/>
              <col width='*'/>
              <col width='20%'/>
              <col width='20%'/>
            </colgroup>
            <thead>
              <tr>
                <td>랭킹</td>
                <td>도서명</td>
                <td>저자</td>
                <td>판매 건수</td>
              </tr>
            </thead>
            <tbody>
              {
                bookRank.map((bookRank, i)=> {
                  return(
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{bookRank.bookTitle}</td>
                      <td>{bookRank.author}</td>
                      <td>{bookRank.totalCnt}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </ListTable>
      </div>
    </div>
  )
}

export default Dashboard