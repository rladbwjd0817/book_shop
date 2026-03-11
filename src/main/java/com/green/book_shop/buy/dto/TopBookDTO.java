package com.green.book_shop.buy.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class TopBookDTO {
  private int bookNum;
  private int totalCnt;
  private String bookTitle;
  private String author;
}
