import React, { useState } from 'react'
import styles from './Join.module.css'
import { GoPerson } from "react-icons/go";
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import axios from 'axios';
import { insertMember } from '../../api/memberApi';
import { useNavigate } from 'react-router-dom';


const Join = () => {
  const nav = useNavigate();

  // 입력한 회원가입 정보 저장 state 변수
  const [joinData, setJoinData] = useState({
    memEmail : '',
    memPw : '',
    //spring에 없어도 상관X, 저장해서 memPw랑 같은지 비교
    confirmPw : '', 
    memName : '',
    memTel : '', //완성된 연락처(010-1111-2222)
    tel1 : '', //010
    tel2 : '', //-1111
    tel3 : '', //-2222
    memAddr : '',
    addrDetail : ''
  });
  
  console.log(joinData);

  // 입력할 때 마다 실행할 함수
  const handleJoinData = (e) => {
    const {name, value} = e.target;

    // 입력받은 데이터를 먼저 업데이트
    setJoinData({
      ...joinData,
      [name] : value
    });

    // state 변경 함수를 함수형 업데이트
    setJoinData(prev =>  ({...prev, [name] : value}));

    // 만약 연락처를 변경하고 있다면
    if(name === 'tel1' || name === 'tel2' || name === 'tel3'){
      setJoinData(prev => 
        ({...prev, memTel : `${prev.tel1}-${prev.tel2}-${prev.tel3}`})
      )
    }
  }

  // 회원가입 버튼 클릭 시 실행함수
  const goJoin = async () => {
    const response = await insertMember(joinData);

    if(response.status === 201){
      alert('회원이 되신 것을 축하합니다 ^0^!')
      nav('/login')
    } else{
      alert('오류발생!!!!!!')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title_div}>
        <h2>
          <GoPerson/>
          회원가입
        </h2>
      </div>
      <div>
        <p>Email</p>
        <div className={styles.id_div}>
          <Input 
            name = 'memEmail'
            value = {joinData.memEmail}
            onChange = {e => handleJoinData(e)}
          />
          <Button title='중복확인'/>
        </div>
      </div>
      <div>
        <p>Password</p>
        <Input 
          type='password'
          name = 'memPw'
          value = {joinData.memPw}
          onChange = {e => handleJoinData(e)}
        />
      </div>
      <div>
        <p>Confirm Password</p>
        <Input 
          type='password'
          name = 'confirmPw'
          value = {joinData.confirmPw}
          onChange = {e => handleJoinData(e)}
        />
      </div>
      <div>
        <p>Name</p>
        <Input 
          name = 'memName'
          value = {joinData.memName}
          onChange = {e => handleJoinData(e)}
        />
      </div>
      <div>
        <p>Tel</p>
        <div className={styles.tel_div}>
          <Input 
            name = 'tel1'
            value = {joinData.tel1}
            onChange = {e => handleJoinData(e)}
          />
          <Input 
            name = 'tel2'
            value = {joinData.tel2}
            onChange = {e => handleJoinData(e)}
          />
          <Input 
            name = 'tel3'
            value = {joinData.tel3}
            onChange = {e => handleJoinData(e)}
          />
        </div>
      </div>
      <div>
        <p>Address</p>
        <div className={styles.addr_div}>
          <Input 
            name = 'memAddr'
            value = {joinData.memAddr}
            onChange = {e => handleJoinData(e)}
          />
          <Button title='검색' variant='gray'/>
        </div>
        <Input 
          name = 'addrDetail'
          value = {joinData.addrDetail}
          onChange = {e => handleJoinData(e)}
        />
      </div>
      <div className={styles.btn_div}>
        <Button 
          title='회원가입' 
          onClick={e => goJoin()}
        />
      </div>
    </div>
  )
}

export default Join