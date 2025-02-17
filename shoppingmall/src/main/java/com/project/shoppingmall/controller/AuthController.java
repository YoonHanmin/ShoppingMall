package com.project.shoppingmall.controller;


import com.project.shoppingmall.auth.JwtTokenProvider;
import com.project.shoppingmall.domain.Social_kakao;
import com.project.shoppingmall.domain.User;
import com.project.shoppingmall.dto.TokenInfo;
import com.project.shoppingmall.dto.UserLoginRequestDto;
import com.project.shoppingmall.service.KaKaoService;
import com.project.shoppingmall.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {

    private KaKaoService kaKaoService;
    private JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        String email = userLoginRequestDto.getEmail();
        String password = userLoginRequestDto.getPassword();

        try {
            TokenInfo tokenInfo = userService.login(email, password);
            return ResponseEntity.ok(tokenInfo);
        }catch (BadCredentialsException e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호가 일치하지 않습니다.");
        }catch (UsernameNotFoundException e) {
            // 사용자 정보가 없는 경우
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("일치하는 ID가 없습니다.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        try {
            User user = userService.registerUser(userLoginRequestDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PostMapping("/kakao/login")
    public ResponseEntity<String> kakaoLogin(@RequestParam String code){

        String accessToken = kaKaoService.getKakaoAccessToken(code);

        HashMap<String,Object> userInfo  = kaKaoService.getKakaoUserInfo(accessToken);
        Long kakaoId = (Long) userInfo.get("id");
        String email = (String) userInfo.get("email");
        String nickname = (String) userInfo.get("nickname");

        kaKaoService.register(userInfo);
        
        // jwt토큰 생성

        return ResponseEntity.ok("success");
    }

}
