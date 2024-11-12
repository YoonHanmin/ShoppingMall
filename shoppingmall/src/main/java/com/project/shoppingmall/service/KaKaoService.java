package com.project.shoppingmall.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.project.shoppingmall.domain.Social_kakao;
import com.project.shoppingmall.domain.User;
import com.project.shoppingmall.repository.KakaoRepository;
import com.project.shoppingmall.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Optional;


@Service
public class KaKaoService {

    private KakaoRepository kakaoRepository;
    private UserRepository userRepository;
    @Value("${kakao.restapi.key}")
    private String kakaoApiKey;

    @Value("${kakao.redirect.uri}")
    private String redirectUri;

    public String getKakaoAccessToken(String code){
        String accessTokenUrl = "https://kauth.kakao.com/oauth/authorize";


        String body = "grant_type=authorization_code"+
                "&client_id="+kakaoApiKey+
                "&redirect_uri="+redirectUri+
                "&code="+code;

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<String> entity = new HttpEntity<>(body,headers);

        ResponseEntity<String> response = restTemplate.exchange(
                accessTokenUrl, HttpMethod.POST,entity,String.class);

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = null;

        try{
            jsonNode = objectMapper.readTree(responseBody);
        }catch (JsonProcessingException e){
            e.printStackTrace();
        }

        return jsonNode.get("access_token").asText();
    }

    public HashMap<String,Object> getKakaoUserInfo(String accessToken) {
        String userInfoUrl = "https://kapi.kakao.com/v2/user/me";
        HashMap<String,Object> userInfo = new HashMap<>();
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization","Bearer "+ accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                userInfoUrl, HttpMethod.GET, entity, String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonResponse = null;
        try {
           jsonResponse = objectMapper.readTree(response.getBody());
        }catch (JsonProcessingException e){
            e.printStackTrace();
        }
        Long id = jsonResponse.get("id").asLong();
        String email = jsonResponse.get("kakao_account").get("email").asText();
        String nickname = jsonResponse.get("properties").get("nickname").asText();

        userInfo.put("id",id);
        userInfo.put("email",email);
        userInfo.put("nickname",nickname);
        return userInfo;
    }

    public Social_kakao register(HashMap<String,Object> userInfo){
        Long kakaoId = (Long) userInfo.get("id");
        String email = (String) userInfo.get("email");
        String username = (String) userInfo.get("nickname");

        Optional<Social_kakao> existingSosial_kakao = kakaoRepository.findByKakaoId(kakaoId);

        User user;
        Social_kakao socialLogin = new Social_kakao();
        if (existingSosial_kakao.isPresent()) {
            // 기존 사용자가 있으면 SocialLogin 테이블에서 찾아서 사용자 정보 반환
            user = existingSosial_kakao.get().getUser();
            socialLogin =existingSosial_kakao.get();
        } else {
            // 새로운 사용자라면 User 테이블에 추가하고 SocialLogin 테이블에 카카오 정보 저장
            user = new User();
            user.setEmail(email);
            user.setUsername(username);

            // 사용자 정보 DB에 저장
            user = userRepository.save(user);

            // SocialLogin 테이블에 카카오 로그인 정보 저장

            socialLogin.setKakaoId(kakaoId);

            socialLogin.setUser(user);
            socialLogin.setEmail(email);

            kakaoRepository.save(socialLogin);
        }

        return socialLogin;
    }

}
