import axios from "axios"

// 구매 도서목록 조회 api
export const selectBuyBook = async (memEmail) => {
  try{
    const response = await axios.get('http://localhost:8080/buys', {params : {'memEmail' : memEmail}})
    return response;
  }catch(e){
    console.log('구매한 도서 목록 조회 api 요청 중 오류 발생', e)
  }
}

// 오늘의 주문건수 및 매출금액 조회 api
export const selectToday = async () => {
  try{
    const response = await axios.get('http://localhost:8080/buys/today')
    return response;
  }catch(e){
    console.log('오늘의 주문건수 및 매출금액 조회 api 오류!', e);
  }
}