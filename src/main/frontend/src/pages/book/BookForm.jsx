import React, { useEffect, useState } from 'react'
import { getCateList } from '../../api/bookCateApi';
import axios from 'axios';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import styles from './BookForm.module.css'
import { insertBook } from '../../api/bookApi';
import Select from '../../components/common/Select';
import Textarea from '../../components/common/Textarea';

const BookForm = () => {
  // 조회한 전체 카테고리 데이터 저장할 state 변수
  const [cateList, setCateList] = useState([]);

  // 마운트되었을 때 카테고리 조회
  // useEffct안의 화살표 함수 앞에는 async를 쓸 수 없음!
  useEffect(() => {
    getListData()
  }, []);

  // 카테고리 목록 조회 함수
  const getListData = async () => {
    const response = await getCateList();
    setCateList(response.data);
    console.log(response.data);
  }

  // Spring으로 전달할 데이터 -> input에 입력한 신상 도서데이터를 저장할 변수
  const [bookData, setBookData] = useState({
    bookTitle : '',
    bookPrice : '',
    author : '',
    bookIntro : '',
    publishDate : '',
    cateNum : '0'
  });


  // 유효성 검사결과 에러 메세지를 저장할 state변수
  const [errors, seterrors] = useState({
    bookTitle : '',
    bookPrice : '',
    publishDate : '',
    cateNum : ''
  });

  // 유효성 검사 실행하는 함수
  const validateField = () => {
    //유효성검사 결과를 표현하는 데이터(true : 모든 유효한 데이터다) 
    let isValid = true;

    //최신 에러 메세지를 저장할 변수
    const newErrors = {
      bookTitle : '',
      bookPrice : '',
      publishDate : '',
      cateNum : ''
    }

    // 제목 유효성검사
    // 1. 제목을 입력하지 않았을 때
    if(bookData.bookTitle === ''){
      newErrors.bookTitle = '도서명은 필수 입력입니다'
      isValid = false;
    }
    // 2. 제목이 최대 글자수를 넘겼을 때
    if(bookData.bookTitle.length > 10){
      newErrors.bookTitle = '도서명은 10글자를 초과할 수 없습니다.'
      isValid = false;
    }

    // 가격 유효성검사
    // 1. 필수 입력 체크
    if(bookData.bookPrice === ''){
      newErrors.bookPrice = '가격은 필수 입력입니다.'
      isValid = false;
    }
    // 2. 잘못된 데이터 체크(문자 X, 0 이하 X)
    // 숫자판단 : isNaN() - 숫자가 아닌거니? -> 숫자들어가면 false, 그 외엔 - true
    // NaN : Not a Number
    // 문자 -> 숫자 변환 : Number('10')
    if(isNaN(bookData.bookPrice) || Number(bookData.bookPrice) <= 0){
      newErrors.bookPrice = '적합한 데이터가 아닙니다.'
      isValid = false;
    }
    // cateNum 유효성검사
    // 1. cateNum이 '0'일 경우
    if(bookData.cateNum === '0'){
      newErrors.cateNum = '카테고리를 선택하세요.'
      isValid = false;
    }

    // publishDate 유효성검사
    // 1. 날짜 선택했는지
    if(bookData.publishDate === ''){
      newErrors.publishDate = '출판일은 필수항목입니다.'
      isValid = false;
    }

    // 위에서 조건에 따라 작성한 최신 에러 메세지를 errors state 변수에 저장
    seterrors(newErrors);
    return isValid;
  }


  // 데이터 입력마다 실행함수 => onChange 할 때마다
  const handleBookData = (e) => {
    setBookData(prev => {
      return {
        ...prev, [e.target.name] : e.target.value
      }
    })

    // 키 입력 시 유효성 검사 결과 나오는 에러메세지를 초기화하는 코드
    if(errors[e.target.name]){
      seterrors((prev) => {
        return{
          ...prev,
          [e.target.name] : ''
        }
      })
    }

  }


  // 신상 도서 등록 버튼 클릭시 실행할 함수
  const regBook = async () => {
    // 유효성 검사를 실행
    const isValid = validateField();
    if(!isValid){
      return;
    }

    const response = await insertBook(bookData);
    if(response.status == 201){
      alert('등록 성공^0^!!')
    }else{
      alert('등록 실패!!')
    }
  }

  return (
    <div>
      <div>
        {/* 상단 제목 */}
        <h2>도서 등록</h2>
      </div>
      <div>
        <p>Book Category</p>
        <Select 
          name='cateNum' 
          value={bookData.cateNum} 
          onChange={e => handleBookData(e)}
        >
          <option value='0'>카테고리 선택</option>
          {
            cateList.map((cate, index) => {
              return(
                <option 
                  key={cate.cateNum} 
                  value={cate.cateNum}
                >{cate.cateName}</option>
              )
            })
          }
        </Select>
        {errors.cateNum && <p className='error'>{errors.cateNum}</p>}
      </div>
      <div>
        <p>Book Title</p>
        <Input 
          name= 'bookTitle'
          value= {bookData.bookTitle} 
          onChange={e => handleBookData(e)}
        />
        {errors.bookTitle && <p className='error'>{errors.bookTitle}</p>}
      </div>
      <div className='priceAndAuthor'>
        <div>
          <p>Price</p>
          <Input
            name= 'bookPrice'
            value= {bookData.bookPrice} 
            onChange={e => handleBookData(e)}
          />
          {errors.bookPrice && <p className='error'>{errors.bookPrice}</p>}
        </div>
        <div>
          <p>Author</p>
          <Input 
            name= 'author'
            value= {bookData.author} 
            onChange={e => handleBookData(e)}
          />
        </div>
      </div>
      <div>
        {/* 책 소개 */}
        <p>Introduce</p>
        <Textarea
          cols={30} rows={5}
          name='bookIntro'
          value={bookData.bookIntro}
          onChange={e => handleBookData(e)}
        ></Textarea>
      </div>
      <div>
        {/* 출판사 */}
        <p>Publish Date</p>
        <Input 
          type='date'
          name= 'publishDate'
          value= {bookData.publishDate} 
          onChange={e => handleBookData(e)}
        />
        {errors.publishDate && <p className='error'>{errors.publishDate}</p>}
      </div>
      <div>
        {/* 등록 버튼 */}
        <Button 
          title='도서 등록'
          variant='green'
          onClick= {e => {regBook()}}
        />
      </div>
    </div>
  )
}

export default BookForm