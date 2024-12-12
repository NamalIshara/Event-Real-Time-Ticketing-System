package com.example.Real_Time_Ticketing_System_BE.DTO;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class loginResponseDto {

    private final String access_token;
    private String email;
    private int id;
    private String role;

}
