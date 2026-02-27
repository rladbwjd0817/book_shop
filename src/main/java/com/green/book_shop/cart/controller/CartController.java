package com.green.book_shop.cart.controller;

import com.green.book_shop.cart.dto.CartDTO;
import com.green.book_shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
@Slf4j
@RequiredArgsConstructor
public class CartController {
  private final CartService cartService;

//  장바구니에 등록 api
//  url : (POST) localhost:8080/carts
  @PostMapping("")
  public ResponseEntity<?> regCartData(@RequestBody CartDTO cartDTO){
    try {
      log.info("장바구니에 상품 등록합니다");
      cartService.regCartData(cartDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("상품 등록 api 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  장바구니 목록 조회 api
//  url : (GET) localhost:8080/carts/이메일
//  @GetMapping("")
//  public ResponseEntity<?> cartList(@RequestParam ("memEmail") String memEmail){
//    try {
//      log.info("장바구니 리스트 조회");
//      List<CartDTO> cartListResult = cartService.cartList(memEmail);
//      return ResponseEntity.status(HttpStatus.OK).body(cartListResult);
//    }catch (Exception e){
//      log.error("장바구니 리스트 조회 중 오류 발생", e);
//      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//    }
//  }

  @GetMapping("/{memEmail}")
  public ResponseEntity<?> cartList(@PathVariable ("memEmail") String memEmail){
    try {
      log.info("장바구니 리스트 조회");
      List<CartDTO> cartListResult = cartService.cartList(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(cartListResult);
    }catch (Exception e){
      log.error("장바구니 리스트 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  삭제 기능 api
//  url: (DELETE) localhost:8080/carts/3
  @DeleteMapping("/{cartNum}")
  public ResponseEntity<?> deleteCart(@PathVariable("cartNum") int cartNum){
    try {
      log.info("삭제 기능 실행합니다!");
      cartService.deleteCart(cartNum);
      return ResponseEntity.status(HttpStatus.OK).body(cartNum);
    }catch (Exception e){
      log.error("삭제 기능 실행 중 오류 발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  수량변경 api
//  url : (PUT) localhost:8080/carts/2
  @PutMapping("/{cartNum}")
  public ResponseEntity<?> updateCartCnt (@PathVariable("cartNum") int cartNum,
                                          @RequestBody CartDTO cartDTO){
    try {
      log.info("장바구니 수량 변경합니다.");
      cartDTO.setCartNum(cartNum);
      cartService.updateCartCnt(cartDTO);
      return ResponseEntity.status(HttpStatus.OK).build();
    }catch (Exception e){
      log.error("장바구니 수량 변경 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  체크박스 선택 시 선택 삭제 api
//  url : (DELETE) localhost:8080/del-carts
  @DeleteMapping("/del-carts")
  public ResponseEntity<?> delCarts(@RequestParam("cartNumList") List<Integer> cartNumList){
    try {
      log.info("선택 삭제되었습니다.");
      System.out.println(cartNumList);
      cartService.deleteCarts(cartNumList);
      return ResponseEntity.status(HttpStatus.OK).build();
    }catch (Exception e){
      log.error("장바구니 선택 삭제 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }




}
