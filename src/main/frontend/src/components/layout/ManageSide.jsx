import React from 'react'
import styles from './ManageSide.module.css'
import { FaAnglesRight } from "react-icons/fa6";
import { SlChart, SlGraph, SlHandbag } from "react-icons/sl";
import { LuChartColumn } from "react-icons/lu";
import { FcInfo } from "react-icons/fc";

const ManageSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {/* 상품관리 */}
        <h3> 
          상품 관리 
          <FaAnglesRight style={{fontSize : 17}} />
        </h3>
        <ul>
          <li>
            카테고리 관리
          </li>
          <li>상품등록</li>
          <li>
            
            상품 재고 관리</li>
          <li>상품 정보 수정</li>
        </ul>
      </div>
      <div className={styles.manager}>
        {/* 구매관리 */}
        <h3>
          구매 관리
          <FaAnglesRight style={{fontSize : 17}} />
        </h3>
        <ul>
          <li>
            <SlHandbag />
            구매 내역 조회
          </li>
          <li>
            <SlGraph />
            월별 매출 관리
          </li>
          <li>
            <LuChartColumn />
            주간 매출 관리
          </li>
        </ul>
      </div>
      <div className={styles.manager}>
        {/* 회원관리 */}
        <h3>
          회원 관리
          <FaAnglesRight style={{fontSize : 17}} />
        </h3>
        <ul>
          <li>
            <FcInfo />
            회원 정보 조회
          </li>
          <li>
            <FcInfo />
            회원 상태 변경
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ManageSide