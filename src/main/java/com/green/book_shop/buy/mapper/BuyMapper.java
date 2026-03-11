package com.green.book_shop.buy.mapper;

import com.green.book_shop.buy.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Mapper
public interface BuyMapper {

//  구매 등록 쿼리 실행 메서드(SHOP_BUY)
  void insertBuy(BuyDTO buyDTO);

//  BUY_DETAIL테이블 INSERT
  void insertBuyDetail(BuyDTO buyDTO);

// 구매 목록 조회 쿼리 실행 메서드
  List<BuyDTO> selectBuyList(String memEmail);

// 이달의.오늘 주문 건수 & 매출금액 조회 쿼리 실행 메서드
  Map<String, Integer> selectSaleInfo();

// 차트조회 쿼리 실행 메서드
//  빈 값에는 dayList를 채워줘야 함!!!
//  day는 dayList에서 하나씩 빠져나온 값이니까!
//  매개변수로 9~0이 들어있는 List를 전달해야 함
  List<Map<String, Object>> selectSale10(List<Integer> dayList);

//  구매 랭킹 쿼리 실행 메서드
  List<TopBuyerDTO> buyRank();

//  인기도서 랭킹 쿼리 실행 메서드
  List<TopBookDTO> bookRank();



}



