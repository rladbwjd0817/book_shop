package com.green.book_shop.book.controller;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//  도서 목록 조회 api
//  url : (GET) localhost:8080/books
  @GetMapping("")
  public ResponseEntity<?> getList(){
    try {
      List<BookDTO> list = bookService.selectList();
      log.info("도서 조회");
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("도서 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  도서 한 권 조회 api
//  url : (GET) localhost:8080/books/{bookNum}
  @GetMapping("/{bookNum}")
  public ResponseEntity<?> getBookData(@PathVariable("bookNum") int bookNum){
    try {
      log.info("조회 성공");
      BookDTO result = bookService.bookData(bookNum);
      return ResponseEntity.status(HttpStatus.OK).body(bookNum);
    }catch (Exception e){
      log.error("한 권의 도서 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }



}
