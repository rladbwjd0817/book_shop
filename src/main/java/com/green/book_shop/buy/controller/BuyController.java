package com.green.book_shop.buy.controller;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import com.green.book_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buys")
@Slf4j
@RequiredArgsConstructor
public class BuyController {
  private final BuyService buyService;

//  구매 등록 api
//  url : (POST) localhost:8080/buys
  @PostMapping("")
  public ResponseEntity<?> addBuy(@RequestBody BuyDTO buyDTO){
    try {
      log.info("구매등록 api 실행합니다");
      buyService.insertBuy(buyDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("구매 등록 api실행 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  구매 목록 조회 api
//  url: (GET) localhost:8080/buys
  @GetMapping("")
  public ResponseEntity<?> selectBuyList(@RequestParam ("memEmail") String memEmail){
    try {
      log.info("구매 목록을 조회합니다.");
      List<BuyDTO> buyListResult = buyService.selectBuyList(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(buyListResult);
    }catch (Exception e){
      log.error("구매 목록 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }


}
