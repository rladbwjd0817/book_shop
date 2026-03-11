package com.green.book_shop.study;

import ch.qos.logback.core.joran.spi.NewRuleProvider;
import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.service.BuyService;
import com.green.book_shop.cart.dto.CartDTO;
import com.green.book_shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/study")
@Slf4j
@RequiredArgsConstructor
public class StudyController {
  private final BuyService buyService;
  private final CartService cartService;


  @GetMapping("/test1")
  public Map<Integer, String> mapTest1(){
// List 객체 생성
    List<String> list = new ArrayList<>();
    //       Map 객체 생성
    Map<Integer, String> map = new HashMap<>();

//    map 객체에 데이터 추가
    map.put(1, "자바");
    map.put(2, "잠온다");
    map.put(3, "전기장판");

    return map;
  }

//  key는 문자열, value는 모든 자료형을 담을 수 있는 Map 객체 형성
  @GetMapping("/test2")
  public Map<String, Object> Test2(){
//    key = 문자열, value = 모든 자료형을 담을 수 있는 Map객체 생성
    Map<String, Object> map = new HashMap<>();
    map.put("1", 1);
    map.put("2", 1.1);
    map.put("3", "aaa");
    return map;
  }

//  구매목록 데이터와 장바구니 목록 데이터를 조회하는 기능
  @GetMapping("/test3")
  public Map<String, Object> test3(){
//    구매목록 조회
    List<BuyDTO> buyList = buyService.selectBuyList("aaa");

//    장바구니 목록 조회
    List<CartDTO> cartList = cartService.cartList("aaa");

//    두 리스트 데이터를 모두 저장할 수 있는 map객체 생성
    Map<String, Object> map = new HashMap<>();
    map.put("buyList", buyList);
    map.put("cartList", cartList);

//    구매 목록 + 장바구니 목록 전부
    return map;
  }


}
