// cart api 모음집

import axios from "axios"

// cart에 도서정보 추가 api
export const regCart = async (regData) => {
  try{
    const response = await axios.post('http://localhost:8080/carts', regData);
    return response;
  }catch(e){
    console.log('어이쿠! 장바구니 담기 오류났는데?!!', e);
  }
}

// 장바구니 목록 조회 api
// export const getCartList = async (logMemEmail) => {
//   try{
//     // memEmail을 뽑아서 함수에 저장한 다음 url로 실어보내기
//     const response = await axios.get('http://localhost:8080/carts', {params : {memEmail : logMemEmail}});
//     return response;
//   }catch(e){
//     console.log('장바구니 목록 조회 하는데 오류가 발생했습니다.', e)
//   }
// }

export const getCartList = async (memEmail) => {
  try{
    // memEmail을 뽑아서 함수에 저장한 다음 url로 실어보내기
    const response = await axios.get(`http://localhost:8080/carts/${memEmail}`);
    return response;
  }catch(e){
    console.log('장바구니 목록 조회 하는데 오류가 발생했습니다.', e)
  }
}

// 삭제 api 요청 
export const deleteCart = async (cartNum) => {
  try{
    const response = await axios.delete(`http://localhost:8080/carts/${cartNum}`);
    return response;
  }catch(e){
    console.log('삭제 중 오류 발생했습니다!', e);
  }
}

// 장바구니 수량 변경 api 요청
export const updateCnt = async (cartNum, cartCnt) => {
  try{
    const response = await axios.put(`http://localhost:8080/carts/${cartNum}`, {'cartCnt' : cartCnt})
    return response
  }catch(e){
    console.log('장바구니 수량 업데이트 중 오류', e)
  }
}

// 체크박스 선택 시 선택 삭제api
export const delCarts = async (cartNumList) => {
  try{
    const response = await axios.delete(
      'http://localhost:8080/carts/del-carts', 
      {params : {'cartNumList' : cartNumList}}
    );
    return response;
  }catch(e){
    alert('선택 삭제 도중 오류가 발생했습니다.')
    console.log('선택 삭제 시 오류 발생!', e)
  }

}