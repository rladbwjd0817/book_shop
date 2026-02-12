package com.green.book_shop.book_cate.controller;

import com.green.book_shop.book_cate.dto.CateDTO;
import com.green.book_shop.book_cate.service.CateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cates")
@Slf4j
@RequiredArgsConstructor
public class CateController {
  private final CateService cateService;

//  전체 카테고리 조회 api
//  url : (GET) localhost:8080/cates
  @GetMapping("")
  public ResponseEntity<List<CateDTO>> getList(){
    try {
      log.info("전체 카테고리를 조회합니다.");
      List<CateDTO> cateResult = cateService.selectCate();
      return ResponseEntity.status(HttpStatus.OK).body(cateResult);
    }catch (Exception e){
      log.error("카테고리 조회 중 오류가 발생했습니다.", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
