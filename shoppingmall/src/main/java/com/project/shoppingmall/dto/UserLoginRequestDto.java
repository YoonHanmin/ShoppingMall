package com.project.shoppingmall.dto;

import lombok.Data;

@Data
public class UserLoginRequestDto {

    private String username;
    private String password;
    private String email;
    private String roles;

}
