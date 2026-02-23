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

//  도서 상세 조회 쿼리 실행 메서드
  BookDTO selectBookDetail(int bookNum);

//  다음에 저장 될 도서 번호 조회 쿼리 실행 메서드
  int getNextBookNum();



}
