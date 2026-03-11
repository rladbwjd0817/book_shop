package com.green.book_shop.buy.controller;

import com.green.book_shop.buy.dto.*;
import com.green.book_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

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

//  오늘, 이달의 주문 건수 및 매출금액 조회 api
//  url : (GET) localhost:8080/buys/sale-info
  @GetMapping("/sale-info")
  public ResponseEntity<?> selectSaleInfo(){
    try {
      log.info("오늘의 주문 건수 및 매출 금액을 조회합니다.");
      Map<String, Integer> saleInfoMap = buyService.selectSaleInfo();
      return ResponseEntity.status(HttpStatus.OK).body(saleInfoMap);
    } catch (Exception e){
      log.error("오늘의 주문 건수 및 매출 금액 조회하는데 실패하였습니다.", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  차트조회 api
//  url : (GET) localhost:8080/buys/chart
  @GetMapping("/chart")
  public ResponseEntity<?> selectSale10(){
    try {
      log.info("차트 조회합니다.");
//      9~0까지 데이터가 들어있는 리스트
      List<Integer> dayList = new ArrayList<>();
      for (int i = 9 ; i > -1 ; i--){
        dayList.add(i);
      }
      List<Map<String, Object>> chartResult = buyService.selectSale10(dayList);
      return ResponseEntity.status(HttpStatus.OK).body(chartResult);
    }catch (Exception e){
      log.error("차트 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  구매 랭킹 조회 api
//  url : (GET) localhost:8080/buys/buy-rank
  @GetMapping("/buy-rank")
  public ResponseEntity<?> buyRank(){
    try {
      log.info("구매랭킹 top5를 조회합니다.");
      List<TopBuyerDTO> buyRankResult = buyService.buyRank();
      return ResponseEntity.status(HttpStatus.OK).body(buyRankResult);
    }catch (Exception e){
      log.error("구매랭킹 조회 중 오류 발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  인기도서 랭킹 조회 api
//  url : (GET) localhost:8080/buys/book-rank
  @GetMapping("/book-rank")
  public ResponseEntity<?> bookRank(){
    try {
      log.info("인기 도서 랭킹 top5를 조회합니다.");
      List<TopBookDTO> bookRankResult = buyService.bookRank();
      return ResponseEntity.status(HttpStatus.OK).body(bookRankResult);
    }catch (Exception e){
      log.error("인기 도서 랭킹 top5를 조회하는 중 오류 발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
