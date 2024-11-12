package com.project.shoppingmall.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor // 기본 생성자 자동 생성
@AllArgsConstructor
public class Social_kakao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 기본 키 (PK)

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String username;
    private String email;
    @Column(name = "kakaoId")
    private Long kakaoId;

}
