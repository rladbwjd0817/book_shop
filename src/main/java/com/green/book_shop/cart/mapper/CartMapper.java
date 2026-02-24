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
}
