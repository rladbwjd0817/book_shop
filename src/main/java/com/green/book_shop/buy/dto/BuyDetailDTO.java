package com.green.book_shop.buy.dto;

import com.green.book_shop.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BuyDetailDTO {
  private int buyDetailNum;
  private int bookNum;
  private int buyCnt;
  private int buyNum;

//  1:1 관계
//  상세조회에는 책 정보 1개
  private BookDTO bookDTO;






}
