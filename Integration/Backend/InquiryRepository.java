package com.course.enquiry.aadpro.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.course.enquiry.aadpro.Entity.Inquiry;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    // You can add custom query methods here if needed
}
