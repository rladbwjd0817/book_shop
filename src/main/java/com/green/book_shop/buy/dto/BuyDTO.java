package com.green.book_shop.buy.dto;


import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.member.dto.MemberDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class BuyDTO {
  private int buyNum;
  private int buyPrice;
  private String memEmail;
  private LocalDateTime buyDate;

//  구매등록 시 넘길 도서 정보가 들어있는 멤버변수
//  private BookDTO bookDTO;

//  1(buyDTO) : N 관계
  private List<BuyDetailDTO> detailList;
}
