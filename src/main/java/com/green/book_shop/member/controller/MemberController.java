package com.green.book_shop.member.controller;


import com.green.book_shop.member.dto.MemberDTO;
import com.green.book_shop.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
@Slf4j //로그 기록
@RequiredArgsConstructor //생성자가 객체 생성해줌.
public class MemberController {
  private final MemberService memberService;

//  회원가입한 사람 등록 API
//  url : (POST) localhost:8080/members
  @PostMapping("")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
   try {
     memberService.join(memberDTO);
     return ResponseEntity.status(HttpStatus.CREATED).build();
   } catch (Exception e){
     log.error("회원가입 작업 중 에러 발생", e);
     return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
   }
  }

//  사용가능한 이메일 조회 API(사용가능하면 return true)
//  url : (GET) localhost:8080/members/checkId/{aaa}
  @GetMapping("/checkId/{memEmail}")
  public ResponseEntity<?> checkId(@PathVariable("memEmail") String memEmail){
    try {
      boolean result = memberService.isUsableEmail(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("중복 아이디 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  로그인 API
//  url : (GET) localhost:8080/members/login
  @GetMapping("/login")
  public ResponseEntity<?> checkLogin(MemberDTO memberDTO){
    try {
      MemberDTO result = memberService.login(memberDTO);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("한 사람만 조회하는데 오류 발생!!!!", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  매니저 로그인 api
//  url : (GET) localhost:8080/items/manage/login
  @GetMapping("/manage/login")
  public ResponseEntity<?> checkManage(String memRole){
    try {
      MemberDTO managerResult = memberService.selectManager(memRole);
      return ResponseEntity.status(HttpStatus.OK).body(memRole);
    }catch (Exception e){
      log.error("매니저 로그인 실패!!", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

  }


}
