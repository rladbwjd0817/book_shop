package com.green.book_shop.book.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString
public class BookDTO {
  private int bookNum;
  private String bookTitle;
  private String author;
  private int bookPrice;
  private int bookStock;
  private String bookIntro;
  private LocalDate publishDate;
  private int cateNum;
  private List<BookImgDTO> bookImgList; // 도서 이미지를 1개 가져오는 것 , 관계 성립!

}
