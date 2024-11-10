package com.project.shoppingmall.dto;

import lombok.Data;

@Data
public class UserLoginRequestDto {
    private String email;
    private String password;
    private String roles;

}
