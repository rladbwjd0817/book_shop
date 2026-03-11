package com.green.book_shop.buy.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.security.PrivateKey;

@Setter
@Getter
@ToString
public class TopBuyerDTO {
  private String memEmail;
  private int saleCntPerMember; //회원별 구매건수
  private int salePerMember; //회원별 구매액
}
