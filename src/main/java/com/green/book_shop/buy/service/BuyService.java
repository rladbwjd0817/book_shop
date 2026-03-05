package com.green.book_shop.buy.service;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import com.green.book_shop.buy.mapper.BuyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;

  //  트랜젝션 : 둘 다 실행할 때 하나만 성공하고 하나는 실패했을 경우엔 둘 다 실패한걸로 간주하도록 하는 것
  //rollbackFor : 그래서 어떤 오류가 발생했을 때 롤백시킬거냐고 묻는거
//  Exception.class : 어떤 오류든 다 포함하는 것
//  구매 등록 정보 기능 실행 메서드

  @Transactional(rollbackFor = Exception.class)
  public void insertBuy(BuyDTO buyDTO){
//    SHOP_BUY INSERT
    buyMapper.insertBuy(buyDTO);

//    BUY_DETAIL INSERT
    buyMapper.insertBuyDetail(buyDTO);
  }

//  구매 목록 조회 기능 실행 메서드
  public List<BuyDTO> selectBuyList(String memEmail){
    return buyMapper.selectBuyList(memEmail);
  }

//  오늘의 주문건수 & 매출금액 기능 실행 메서드
  public BuyDTO todayOrder(){
    return buyMapper.todayOrder();
  }


}
