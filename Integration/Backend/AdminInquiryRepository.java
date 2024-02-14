// AdminInquiryRepository.java
package com.course.enquiry.aadpro.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.course.enquiry.aadpro.Entity.AdminInquiry;

public interface AdminInquiryRepository extends JpaRepository<AdminInquiry, Long> {
}
