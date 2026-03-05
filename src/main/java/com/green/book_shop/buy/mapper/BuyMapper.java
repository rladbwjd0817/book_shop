package com.green.book_shop.buy.mapper;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BuyMapper {

//  구매 등록 쿼리 실행 메서드(SHOP_BUY)
  void insertBuy(BuyDTO buyDTO);

//  BUY_DETAIL테이블 INSERT
  void insertBuyDetail(BuyDTO buyDTO);

// 구매 목록 조회 쿼리 실행 메서드
  List<BuyDTO> selectBuyList(String memEmail);

//  오늘의 주문 건수 & 매출금액 조회 쿼리 실행 메서드
  BuyDTO todayOrder();



}



