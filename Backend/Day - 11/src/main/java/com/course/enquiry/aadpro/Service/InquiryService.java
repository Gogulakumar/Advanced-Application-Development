package com.course.enquiry.aadpro.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.enquiry.aadpro.Entity.Inquiry;
import com.course.enquiry.aadpro.Repository.InquiryRepository;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    public Inquiry createInquiry(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }

    public Inquiry getInquiryById(Long id) {
        Optional<Inquiry> inquiryOptional = inquiryRepository.findById(id);
        if (inquiryOptional.isPresent()) {
            return inquiryOptional.get();
        } else {
            // Handle case when inquiry with given id does not exist
            // You can throw an exception or return null/empty object based on your application requirements
            return null;
        }
    }

    // You can add more methods here for updating, deleting, or retrieving single inquiries
}
