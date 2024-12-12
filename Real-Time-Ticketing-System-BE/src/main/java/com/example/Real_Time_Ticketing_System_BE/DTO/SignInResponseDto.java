package com.example.Real_Time_Ticketing_System_BE.DTO;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignInResponseDto {

    private final String access_token;
    private String email;
    private String name;
    private int id;
    private String role;
}
