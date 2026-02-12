package com.green.book_shop.book_cate.service;

import com.green.book_shop.book_cate.dto.CateDTO;
import com.green.book_shop.book_cate.mapper.CateMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CateService {
  private final CateMapper cateMapper;

//  전체 카테고리 조회 기능 실행 메서드
  public List<CateDTO> selectCate(){
    return cateMapper.selectCateList();
  }

}
