package com.project.shoppingmall.service;

import com.project.shoppingmall.auth.JwtTokenProvider;
import com.project.shoppingmall.domain.User;
import com.project.shoppingmall.dto.TokenInfo;
import com.project.shoppingmall.dto.UserLoginRequestDto;
import com.project.shoppingmall.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    public TokenInfo login(String username,String password) {
        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);

            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
            return tokenInfo;


        }catch (BadCredentialsException e){
            throw new BadCredentialsException("비밀번호가 일치하지않습니다.");
        }catch(UsernameNotFoundException e){
            throw new UsernameNotFoundException("일치하는 ID가 없습니다.");
        }catch (AuthenticationException e){
            throw new AuthenticationException("인증 오류가 발생했습니다. 다시 시도해 주세요.") {};
        }



    }

    public User registerUser(UserLoginRequestDto userLoginRequestDto) {
        // 비밀번호를 암호화합니다
        String encodedPassword = passwordEncoder.encode(userLoginRequestDto.getPassword());

        // User 객체 생성 (여기서 암호화된 비밀번호를 저장)
        User user = new User();
        user.setUsername(userLoginRequestDto.getUsername());
        user.setPassword(encodedPassword);
        user.setEmail(userLoginRequestDto.getEmail());// 암호화된 비밀번호 저장

        // DB에 저장
        return userRepository.save(user);
    }
}
