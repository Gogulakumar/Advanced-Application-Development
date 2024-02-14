package com.course.enquiry.aadpro.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.enquiry.aadpro.Entity.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, String> {

}
