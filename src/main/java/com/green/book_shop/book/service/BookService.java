package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.dto.BookImgDTO;
import com.green.book_shop.book.mapper.BookImgMapper;
import com.green.book_shop.book.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.print.Book;
import java.util.List;

@Service
@RequiredArgsConstructor //생성자 자동 생성
public class BookService {
  private final BookMapper bookMapper;
  private final BookImgMapper bookImgMapper;

//  신상 도서 등록 기능 실행 메서드
//  insert 쿼리가 연속 2번 실행되기 때문에 데이터의 무결성을 유지하기 위해 transaction을 걸어줌
//  @Transactional 어노테이션이 붙어있는 service 메서드는 안에 작성된 모든 쿼리가 성공해야 commit 진행함
//  rollbackFor = Exception.class : 어떤 이유에서든 오류가 발생하면 전부 롤백시킬게 라는 설정
  @Transactional(rollbackFor = Exception.class)
  public void regBookData(BookDTO bookDTO, List<BookImgDTO> imgList){
    bookMapper.insertBook(bookDTO);
    bookImgMapper.insertImages(imgList);
  }

//  도서목록 조회 기능 실행 메서드
  public List<BookDTO> selectList(){
    return bookMapper.selectBookList();
  }

//  도서 한 권 조회 기능 실행 메서드
  public BookDTO bookData(int bookNum){
    return bookMapper.bookData(bookNum);
  }

//  다음에 저장 될 도서 번호 조회 기능 실행 메서드
  public int getNextBookNum(){
    return bookMapper.getNextBookNum();
  }

}
