package com.green.book_shop.util;

// 파일 업로드 관련 메서드 정의

import org.springframework.stereotype.Component;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Component //객체 생성
public class UploadUtil {
  //  application.properties 파일의 file.upload.dir로 선언한 데이터를 주입
  @Value("${file.upload.dir}")
  private String uploadPath;

  //  단일 파일 업로드 기능
  public void fileUpload(MultipartFile mainImgFile){
//    파일을 선택했을 때만 업로드 로직 시작
    if (mainImgFile != null){
//        화면에서 선택한 원본 파일명
      String originFileName = mainImgFile.getOriginalFilename();

//        첨부할 파일명을 생성(첨부파일명 중복 방지를 위해)
      String uuid = UUID.randomUUID().toString();

//        ★ 확장자는 살려놔야 파일을 열 수 있음!! ★
//        원본파일의 확장자 추출
//        String email = "abcd@naver.com";
//        email.indexOf("@"); -> 4 : 매개변수에 입력한 문자열의 위치를 알려주는 메서드
//        email.lastIndexOf("@"); : 매개변수에 입력한 문자열이 여러 개 일경우 마지막으로 일치하는 위치를 알려주는 메서드
//        email.subString(email.indexOf("."));

//        String fileName = "abce.jpg"
//        String result = fileName.subString(fileName.indexOf("."));
      String extension = originFileName.substring(originFileName.lastIndexOf("."));

//        첨부할 파일명
      String uploadFileName = uuid + extension;


//        파일 생성 코드
//        "D:/01-STUDY/dev/upload/" + "abc.jpg"
//        -> "D:/01-STUDY/dev/upload/abc.jpg"
//        빈 겁데기임↓
      File file = new File(uploadPath + uploadFileName);

//        위 코드에서 만들어진 file에 첨부할 이미지 파일로 변환함(덮어씀).
      try {
        mainImgFile.transferTo(file);
      } catch (IOException e) {
        throw new RuntimeException(e);
      }

    }
  }


  //  다중 파일 업로드 기능
  public  void multipleFileUpload(MultipartFile[] subImgs){
//    매개변수로 들어온 첨부파일 수만큼 반복
    for (MultipartFile subImg : subImgs){
      fileUpload(subImg);
    }


  }


}
