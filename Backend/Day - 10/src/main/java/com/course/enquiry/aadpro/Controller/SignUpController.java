package com.course.enquiry.aadpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.course.enquiry.aadpro.Entity.UserInfo;
import com.course.enquiry.aadpro.Repository.UserInfoRepository;
import com.course.enquiry.aadpro.Service.JwtService;
import com.course.enquiry.aadpro.dto.AuthRequest;
import com.course.enquiry.aadpro.dto.AuthResponse;





@RestController
public class SignUpController {
   

    @Autowired
    private UserInfoRepository userRepo;

    @Autowired
    private JwtService jwtService;

    // @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

   

    @PostMapping("/register")
    public String addUser(@RequestBody UserInfo userInfo) 
    {
        userInfo.setPassword(passwordEncoder().encode(userInfo.getPassword()));
        userRepo.save(userInfo);
        return "user added to system ";
    }

    @PostMapping("/authenticate")
    public AuthResponse authenticate(@RequestBody AuthRequest authRequest) {
        AuthResponse res = jwtService.createJwtToken(authRequest);
        System.out.println(authRequest.getUsername() + " " + authRequest.getPassword() + "=> ");
        return jwtService.createJwtToken(authRequest);
    }


    // Additional controller methods if needed
}
