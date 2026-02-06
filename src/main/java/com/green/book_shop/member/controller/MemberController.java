package com.green.book_shop.member.controller;


import com.green.book_shop.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@Slf4j //로그 기록
@RequiredArgsConstructor //생성자가 객체 생성해줌.
public class MemberController {
  private final MemberService memberService;

}
