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
export const goCartList = async (logMemEmail) => {
  try{
    // memEmail을 뽑아서 함수에 저장한 다음 url로 실어보내기
    const response = await axios.get('http://localhost:8080/carts', {params : {memEmail : logMemEmail}});
    return response;
  }catch(e){
    console.log('장바구니 목록 조회 하는데 오류가 발생했습니다.', e)
  }
}
