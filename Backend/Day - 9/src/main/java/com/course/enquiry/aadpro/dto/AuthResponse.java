package com.course.enquiry.aadpro.dto;



import com.course.enquiry.aadpro.Entity.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    
    UserInfo user;
    String jwtToken;

}