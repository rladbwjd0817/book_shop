package com.green.book_shop.member.service;

import com.green.book_shop.member.dto.MemberDTO;
import com.green.book_shop.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
// 반드시 필요한 매개변수만 받겠다!
// 멤버변수 중에 final 이 붙어있는 것만 생성자 통해서 초기화 함.
// final : 멤버변수 값 변경 불가
public class MemberService {
  private final MemberMapper memberMapper;

  //  회원가입 기능 실행 메서드
  public void join(MemberDTO memberDTO){
    memberMapper.join(memberDTO);
  }

// 사용가능 이메일 확인 기능 실행 메서드(사용가능하면 return true)
  public boolean isUsableEmail(String memEmail){
//    이메일이 조회됐다 -> 이메일 중복임
//    이메일이 조회안됨(email = null) -> 이메일 사용가능
    String email = memberMapper.isUsableEmail(memEmail);
    System.out.println(email);

    return email == null;
  }

//  로그인 기능 실행 메서드
  public MemberDTO login(MemberDTO memberDTO) {
//    로그인하려는 회원의 이메일, 이름, 권한정보를 리액트에 전달
//    데이터 조회 안되면 -> 로그인 실패(result == null)
    MemberDTO result = memberMapper.login(memberDTO);

    return result;
  }



}
