// SHOP_BOOK 테이블과 관련된 axios 기능정의 파일

import axios from "axios"

// 도서 등록 함수
export const insertBook = async (bookData) => {
  try{
    const response = await axios.post('http://localhost:8080/books', bookData);
    return response;
  }catch(e){
    console.log('도서 등록 axios 오류', e)
  }
}

// 도서 목록 조회 함수
export const getBookList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/books')
    return response;
  }catch(e){
    alert('어이쿠 도서 정보 조회하는데 오류떴어!')
    console.log(e)
  }
}

// 도서 한 권 조회 함수
export const getBookData = () => {
  try{
    const response = axios.get()
    return response
  }catch(e){
    alert('도서 조회하는데 오류 떴는디?!')
    console.log(e)
  }
}