package com.project.shoppingmall.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor // 기본 생성자 추가
@AllArgsConstructor // 모든 필드를 위한 생성자
public class TokenInfo {

    private String grantType;
    private String accessToken;
    private String refreshToken;
}
