package com.project.shoppingmall.auth;

import com.project.shoppingmall.domain.User;
import com.project.shoppingmall.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.checkerframework.checker.units.qual.C;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
       return userRepository.findByEmail(email)
               .map(this::createUserDetails)
                .orElseThrow(()->new UsernameNotFoundException("일치하는 유저가 없습니다."));


    }

    private UserDetails createUserDetails(User user){
        List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_"+user.getRole()));

        // Spring Security의 User 클래스를 사용해 UserDetails 생성
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                authorities
        );
    }
}
