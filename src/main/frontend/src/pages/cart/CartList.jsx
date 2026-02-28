import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import UserSide from '../../components/layout/UserSide';
import styles from './CartList.module.css';
import { useParams } from 'react-router-dom';
import { delCarts, deleteCart, getCartList, updateCnt } from '../../api/cartApi';
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

  // 체크한 체크박스 데이터들을 저장할 state 변수
  // 해당 변수에는 cartNum이 저장
  const [cartNumList, setCartNumList] = useState([]);

  // 전체 체크박스 체크여부 데이터를 저장할 state 변수
  const [isChecked, setIsChecked] = useState(true);

  
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

    // 조회한 cartNum 데이터들을 cartNumList 변수에 저장
    const cartNumArr = [];
    for(const e of response.data){
      cartNumArr.push(e.cartNum);
    }
    setCartNumList(cartNumArr);
  }


  // 삭제 버튼 클릭 시 삭제 실행할 함수
  const deleteData = async (cartNum) => {
    if(confirm('정말 삭제하시겠습니까?')){
      const response = await deleteCart(cartNum);
      alert('삭제 했습니다!');
      getList();
    }
  }
  
  // 체크박스 컨트롤 함수
  const handleCartNumList = (e) => {
    // 체크가 됐을 때
    if(e.target.checked){
      setCartNumList([...cartNumList, Number(e.target.value)])
    }
    // 체크가 해제 되었을 때
    else{
      setCartNumList(cartNumList.filter(each => each !== Number(e.target.value)));
    }
  }


  // 장바구니 홈페이지 마운트 됐을 때 뜨기
  useEffect(() => {
    getList();
  }, []);

  // 장바구니 목록에 상품이 있으면 그 상품뜨고, 상품이 없으면 장바구니가 비었습니다 뜨기

  // useEffect로 시점 정하기 - cartNumList state 변수의 데이터가 변경되면 실행할 useEffect;
  // checkbox가 변경되면 총 가격을 변경
  useEffect(() => {
    // 총 가격 다시 계산
    let sum = 0;
    for(const e of cartList){
      if(cartNumList.includes(e.cartNum)){
        sum = sum + e.cartCnt * e.cartBook.bookPrice;
      }
    }
    setTotalPrice(sum);
  }, [cartNumList])

  // 장바구니 수량 변경 함수
  const updateCartCnt = async (cartNum, cartCnt) => {
    // 입력한 수량(cartCnt)가 숫자인지 확인
    await updateCnt(cartNum, cartCnt);
    getList();
  }

  // 장바구니 선택 삭제
  const removeCarts = async () => {
    // 정말 삭제할지 물어봄
    const result = confirm("진짜로 삭제하시겠습니까-0-??")
    if(!result) return;
    
    if(cartNumList.length === 0){
      alert("삭제할 도서가 선택되지 않았습니다.");
      return;
    }
    
    await delCarts(cartNumList);
    getList();
  }

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
                  <input 
                    type='checkbox' 
                    checked={isChecked} 
                    onChange={e => {
                      // 제목줄의 상태 변경
                      setIsChecked(e.target.checked)

                      // 체크여부에 따라 내용줄의 checkbox 체크여부도 변경
                      // 체크를 했을 때
                      if(e.target.checked){
                        setCartNumList(cartList.map(each => each.cartNum));
                      }
                      // 체크를 해제했을 때
                      else{
                        setCartNumList([]);
                      }
                    }}
                  />
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
                        checked={cartNumList.includes(cart.cartNum)}
                        value={cart.cartNum} 
                        onChange={e => {handleCartNumList(e)}}/>
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
                        type='number'
                        value={cart.cartCnt}
                        onChange={e => 
                          updateCartCnt(cart.cartNum, e.target.value)
                        }
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
      <div>
        <Button 
          title='선택 삭제'
          onClick={e => {removeCarts()}}
        />
        <Button 
          title='선택 구매'
        />
      </div>
      
    </div>
  )
}

export default CartList

