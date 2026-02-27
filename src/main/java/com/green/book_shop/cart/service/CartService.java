package com.green.book_shop.cart.service;

import com.green.book_shop.cart.dto.CartDTO;
import com.green.book_shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;

//  장바구니에 상품추가 기능 실행 메서드
  public void regCartData(CartDTO cartDTO){
//    현재 도서가 내 장바구니에 포함되어 있는지 확인
//    memEmail이 조회가 됐다 -> 중복 상품
//    memEmail이 조회가 안됐다(memEmail == null) -> 새 상품
    String memEmail = cartMapper.isDuplicateBook(cartDTO);

    if (memEmail == null){
      //    내 장바구니에 없으면 추가(insert)
      cartMapper.regCartData(cartDTO);
    }
//    내 장바구니에 있으면 수량 변경(update)
    else {
      cartMapper.updateCartBook(cartDTO);
    }
  }

//  장바구니 목록 조회 기능 실행 메서드
  public List<CartDTO> cartList(String memEmail){
    return cartMapper.cartList(memEmail);
  }

//  삭제버튼 클릭 시 삭제 기능 실행 메서드
  public void deleteCart(int cartNum){
    cartMapper.deleteCart(cartNum);
  }

//  장바구니 수량 변경 기능 실행 메서드
  public void updateCartCnt(CartDTO cartDTO){
    cartMapper.updateCartCnt(cartDTO);
  }

//  체크박스 선택 시 선택 삭제 기능 실행 메서드
  public void deleteCarts(List<Integer> cartNumList){
    cartMapper.deleteCarts(cartNumList);
  }

}
