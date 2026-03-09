package com.green.book_shop.buy.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
// 오늘, 이달의 주문건수 및 매출액 조회 데이터를 가져오기 위한 DTO
public class SaleInfoDTO {
  private int saleCntToday;
  private int saleCntMonth;
  private int saleToday;
  private int saleMonth;
}
