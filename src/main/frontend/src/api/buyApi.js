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
export const saleInfo = async () => {
  try{
    const response = await axios.get('http://localhost:8080/buys/sale-info')
    return response;
  }catch(e){
    console.log('오늘의 주문건수 및 매출금액 조회 axios 오류!', e);
  }
}

// 구매 랭킹 데이터 조회 api
export const selectBuyRank = async () => {
  try{
    const response = await axios.get('http://localhost:8080/buys/buy-rank');
    return response;
  }catch(e){
    console.log('구매랭킹 조회 axios 실행 중 오류 발생', e)
  }
}

// 인기도서 랭킹 조회 api
export const selectBookRank = async () => {
  try{
    const response = await axios.get('http://localhost:8080/buys/book-rank');
    return response;
  }catch(e){
    console.log('인기도서 랭킹 조회 axios 실행 중 오류 발생', e);
  }
}

// 최근 10일간의 차트조회 api
export const selectChartData = async () => {
  try{
    const response = await axios.get('http://localhost:8080/buys/chart');
    return response;
  }catch(e){
    console.log('차트 조회 axios 실행 중 오류',e);
  }
}