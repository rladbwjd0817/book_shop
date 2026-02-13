package com.green.book_shop.book.mapper;

import com.green.book_shop.book.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {

//  신상 도서 등록 쿼리 실행 메서드
  void insertBook(BookDTO bookDTO);

//  도서 목록 조회 쿼리 실행 메서드
  List<BookDTO> selectBookList();

//  도서 한 권 조회 쿼리 실행 메서드
  BookDTO bookData(int bookNum);




}
