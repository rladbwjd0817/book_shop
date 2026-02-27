package com.green.book_shop.cart.mapper;

import com.green.book_shop.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {

//  장바구니에 상품 추가 쿼리 실행 메서드
  void regCartData(CartDTO cartDTO);

//  장바구니 목록 조회 쿼리 실행 메서드
  List<CartDTO> cartList(String memEmail);

  //중복 상품 확인 + 중복 상품 있으면 update, 없으면 insert 실행 쿼리
  String isDuplicateBook (CartDTO cartDTO);

//  수량변경 쿼리 실행 메서드
  void updateCartBook(CartDTO cartDTO);

  // 삭세 쿼리 실행 메서드
  void deleteCart(int cartNum);

// 장바구니 수량 변경 쿼리
  void updateCartCnt(CartDTO cartDTO);

//  선택 장바구니 선택 삭제
  void deleteCarts(List<Integer> cartNumList);
}



