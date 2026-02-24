import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import UserSide from '../../components/layout/UserSide';
import styles from './CartList.module.css';
import { useParams } from 'react-router-dom';
import { goCartList } from '../../api/cartApi';

// 장바구니 목록 페이지
const CartList = () => {
  // memEmail을 url에 실어보낼 params
  const params = useParams();

  // meeEmail 뽑아서 저장힐 변수에 저장
  const loginInfo = sessionStorage.getItem('loginInfo');
  // 문자열로 뽑아낸 loginInfo를 객체형태로 바꾸기
  const loginInfo_obj = JSON.parse(loginInfo);
  const logMemEmail = loginInfo_obj.memEmail
  
  console.log(logMemEmail);

  // 조회한 장바구니 목록 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  // 장바구니 목록 조회 실행할 함수
  const getCartData = async () => {
    const response = await goCartList(logMemEmail);
    setCartList(response.data);
  }

  // 장바구니 홈페이지 마운트 됐을 때 뜨기
  useEffect(() => {
    getCartData();
  }, []);
  // 장바구니 목록에 상품이 있으면 그 상품뜨고, 상품이 없으면 장바구니가 비었습니다 뜨기


  return (
    <div className={styles.container}>
      <div className={styles.cartList_div}>
        {/* 장바구니 목록 */}
        <div>
          <h2> 
            <FaShoppingCart color='#7e9e8f' /> 장바구니
          </h2>
        </div>
        <div className={styles.table_div}>
          <table>
            <thead>
              <tr>
                <td>No</td>
                <td>
                  <input type='checkbox'></input>
                </td>
                <td>도서 정보</td>
                <td>가격</td>
                <td>수량</td>
                <td>구매 가격</td>
                <td>장바구니 등록 일자</td>
                <td>삭제</td>
              </tr>
            </thead>
            <tbody>
              {/* map돌리기 */}
              {
                cartList.map((cart, i) => {
                  return (
                    <tr key={i}>
                      <td></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          <p>총 구매 가격 : </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default CartList