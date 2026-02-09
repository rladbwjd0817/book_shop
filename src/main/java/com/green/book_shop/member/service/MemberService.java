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



}
