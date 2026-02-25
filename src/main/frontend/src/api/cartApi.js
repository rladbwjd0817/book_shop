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
