package com.project.shoppingmall.repository;

import com.project.shoppingmall.domain.Social_kakao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KakaoRepository extends JpaRepository<Social_kakao,Long> {

    Optional<Social_kakao> findByKakaoId(Long kakaoId);

}
