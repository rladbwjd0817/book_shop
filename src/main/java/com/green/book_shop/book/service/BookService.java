package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;

@Service
@RequiredArgsConstructor //생성자 자동 생성
public class BookService {
  private final BookMapper bookMapper;


//  신상 도서 등록 기능 실행 메서드
  public void regBookData(BookDTO bookDTO){
    bookMapper.insertBook(bookDTO);
  }

//  도서목록 조회 기능 실행 메서드
  public List<BookDTO> selectList(){
    return bookMapper.selectBookList();
  }

//  도서 한 권 조회 기능 실행 메서드
  public BookDTO bookData(int bookNum){
    return bookMapper.bookData(bookNum);
  }

}
