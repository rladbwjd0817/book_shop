package com.green.book_shop.member.mapper;

import com.green.book_shop.member.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import javax.swing.*;

@Mapper
public interface MemberMapper {

//  회원가입 쿼리 실행 메서드
  void join(MemberDTO memberDTO);

// 중복 이메일 조회 쿼리 실행 메서드
  String isUsableEmail(String memEmail);

//  로그인 쿼리 실행 메서드
  MemberDTO login (MemberDTO memberDTO);

}
