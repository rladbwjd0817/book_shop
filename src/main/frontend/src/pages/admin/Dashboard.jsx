import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import ListTable from '../../components/common/ListTable'
import { IoReceiptOutline } from "react-icons/io5";
import { BiWon } from "react-icons/bi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { selectToday } from '../../api/buyApi';


const Dashboard = () => {
  // 오늘의 주문건수 및 매출금액을 저장할 state 변수 생성
  const [todayResult, setTodayResult] = useState({})

  // 이달의 주문건수 및 매출금액을 저장할 state 변수 생성

  // 주문건수 및 매출금액 조회 실행 함수
  const getTodayResult = async () => {
    const response = await selectToday();
    console.log(response.data);
    setTodayResult(response.data);
  }

  console.log('오늘의 주문건수 및 매출금액 - ', todayResult);

  // 마운트되면 바로 조회
  useEffect(() => {getTodayResult()}, [])

  return (
    <div className={styles.container}>
      <div>
        {/* 건수, 매출금액 표시 */}
        <div className={styles.result}>
          <div>
            <p>
              <IoReceiptOutline 
              // style={{paddingRight : '4px', fontSize : '1.5rem'}}
              />
              오늘의 주문건수
            </p>
            <p>13</p>
          </div>
          <div>
            <p>
              <MdOutlineCalendarMonth />
              이 달의 주문건수
            </p>
            <p>50</p>
          </div>
          <div>
            <p>
              <BiWon />
              오늘의 매출 금액
            </p>
            <p>500000</p>
          </div>
          <div>
            <p>
              <MdOutlineCalendarMonth />
              이 달의 매출금액
            </p>
            <p>1,500,000</p>
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
            <tbody></tbody>
          </ListTable>
      </div>
      <div>
        <p>TOP 5 인기 도서 랭킹</p>
          <ListTable className={styles.book_rank}>
            <colgroup>
              <col width='15%'/>
              <col width='*'/>
              <col width='30%'/>
              <col width='35%'/>
            </colgroup>
            <thead>
              <tr>
                <td>랭킹</td>
                <td>도서명</td>
                <td>저자</td>
                <td>판매 건수</td>
              </tr>
            </thead>
            <tbody></tbody>
          </ListTable>
      </div>
    </div>
  )
}

export default Dashboard