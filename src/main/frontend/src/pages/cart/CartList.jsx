import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import UserSide from '../../components/layout/UserSide';
import styles from './CartList.module.css';
import { useParams } from 'react-router-dom';
import { deleteCart, getCartList } from '../../api/cartApi';
import Button from '../../components/common/Button';
import ListTable from '../../components/common/ListTable';
import dayjs from 'dayjs';
import Input from '../../components/common/Input';

// 장바구니 목록 페이지
const CartList = () => {
  // memEmail을 url에 실어보낼 params
  const params = useParams();

  // meeEmail 뽑아서 저장힐 변수에 저장
  const loginInfo = sessionStorage.getItem('loginInfo');
  // // 문자열로 뽑아낸 loginInfo를 객체형태로 바꾸기
  const loginInfo_obj = JSON.parse(loginInfo);
  const logMemEmail = loginInfo_obj.memEmail


  // 조회한 장바구니 목록 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  // 총 구매가격 저장할 state 변수
  const [totalPrice, setTotalPrice] = useState(0);
  
  // 장바구니 목록 조회 실행할 함수
  const getList = async () => {
    const response = await getCartList(logMemEmail);
    setCartList(response.data);
    console.log(response.data)

    // 총 구매 가격 setting
    let sum = 0;
    for(const e of response.data){
      sum = sum + e.cartCnt * e.cartBook.bookPrice;
    }
    
    setTotalPrice(sum)
  }

  // 삭제 버튼 클릭 시 삭제 실행할 함수
  const deleteData = async (cartNum) => {
    if(confirm('정말 삭제하시겠습니까?')){
      const response = await deleteCart(cartNum);
      alert('삭제 했습니다!');
      getList();
    }
  }

  


  // 장바구니 홈페이지 마운트 됐을 때 뜨기
  useEffect(() => {
    getList();
  }, []);

  // 장바구니 목록에 상품이 있으면 그 상품뜨고, 상품이 없으면 장바구니가 비었습니다 뜨기


  return (
    <div className={styles.container}>
      <div>
        <ListTable>
          <colgroup>
            <col width='3%'/>
            <col width='3%'/>
            <col width='*'/>
            <col width='10%'/>
            <col width='10%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='10%'/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
                <td>
                  <input type='checkbox' checked={true} onChange={e => {}}></input>
                </td>
                <td>도서 정보</td>
                <td>가격</td>
                <td>수량</td>
                <td>구매 가격</td>
                <td>등록 일자</td>
                <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {
              cartList.length === 0 
              ?
              <tr>
                <td colSpan={8}>장바구니에 등록된 도서가 없습니다.</td>
              </tr>
              :
              cartList.map((cart, i) => {
                return(
                  <tr key={i}>
                    <td>{cartList.length - i}</td>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={true} 
                        onChange={e => {}}/>
                    </td>
                    <td>
                      <div className={styles.flex_div}>
                        <img
                          style={{width : 80}} 
                          src={`http://localhost:8080/upload/${cart.cartBook.bookImgList[0].uproadFileName}`} 
                        />
                        <p>{cart.cartBook.bookTitle}</p>
                      </div>
                    </td>
                    <td>{cart.cartBook.bookPrice.toLocaleString()}</td>
                    <td className={styles.cnt_td}>
                      <Input 
                        value={cart.cartCnt}
                        onChange={e => {}}
                      />
                    </td>
                    <td>{(cart.cartCnt * cart.cartBook.bookPrice).toLocaleString()}</td>
                    <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:MM')}</td>
                    <td>
                      <Button 
                        title='삭제'
                        variant='gray'
                        onClick={e => {deleteData(cart.cartNum)}}
                      /> 
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </ListTable>
      </div>
      <div className={styles.totalPrice_div}>
        <p>총 구매 가격 : {totalPrice.toLocaleString()}원</p>
      </div>
      <div></div>
      
    </div>
  )
}

export default CartList