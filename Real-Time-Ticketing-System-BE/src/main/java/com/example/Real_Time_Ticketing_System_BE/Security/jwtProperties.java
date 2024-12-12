package com.example.Real_Time_Ticketing_System_BE.Security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
@ConfigurationProperties("security.jwt")
public class jwtProperties {
/**
    *secretkey is use for issuing jwt token
 **/

    private String secretKey;
}
