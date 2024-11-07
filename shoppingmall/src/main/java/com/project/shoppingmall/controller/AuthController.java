package com.project.shoppingmall.controller;


import com.project.shoppingmall.domain.User;
import com.project.shoppingmall.dto.TokenInfo;
import com.project.shoppingmall.dto.UserLoginRequestDto;
import com.project.shoppingmall.service.ProductService;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        String username = userLoginRequestDto.getUsername();
        String password = userLoginRequestDto.getPassword();

        try {
            TokenInfo tokenInfo = userService.login(username, password);
            return ResponseEntity.ok(tokenInfo);
        }catch (BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호가 일치하지 않습니다.");
        }catch (UsernameNotFoundException e) {
            // 사용자 정보가 없는 경우
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("일치하는 ID가 없습니다.");
        } catch (Exception e) {
            // 기타 예기치 않은 오류 처리
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    }
    @PostMapping("/register")
    public void register(@RequestBody UserLoginRequestDto userLoginRequestDto){
        User user = userService.registerUser(userLoginRequestDto);
    }

}