package com.green.book_shop.book.controller;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
@Slf4j
@RequiredArgsConstructor
public class BookController {
  private final BookService bookService;

//  신상 도서 등록 api
//  url : (POST) localhost:8080/books
  @PostMapping("")
  public ResponseEntity<?> regBookData(@RequestBody BookDTO bookDTO){
    try {
      bookService.regBookData(bookDTO);
      log.info("도서 등록에 성공했습니다.");
      return ResponseEntity.status(HttpStatus.CREATED).build(); //응답결과에 대한 리턴
    } catch (Exception e){
      log.error("도서 등록 중 오류가 발생했습니다.", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }




}
