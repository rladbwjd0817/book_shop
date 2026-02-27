package com.green.book_shop.cart.dto;

import com.green.book_shop.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class CartDTO {
  private int cartNum;
  private int bookNum;
  private int cartCnt;
  private String memEmail;
  private LocalDateTime cartDate;


//  장바구니에 추가할 도서
  private BookDTO cartBook;
}
