// AdminInquiryService.java
package com.course.enquiry.aadpro.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.enquiry.aadpro.Entity.AdminInquiry;
import com.course.enquiry.aadpro.Repository.AdminInquiryRepository;

import java.util.List;

@Service
public class AdminInquiryService {
    @Autowired
    private AdminInquiryRepository adminInquiryRepository;

    public List<AdminInquiry> getAllAdminInquiries() {
        return adminInquiryRepository.findAll();
    }

    public AdminInquiry getAdminInquiryById(Long id) {
        return adminInquiryRepository.findById(id).orElse(null);
    }

    public AdminInquiry createAdminInquiry(AdminInquiry adminInquiry) {
        return adminInquiryRepository.save(adminInquiry);
    }

    public AdminInquiry updateAdminInquiry(Long id, AdminInquiry updatedAdminInquiry) {
        AdminInquiry existingAdminInquiry = adminInquiryRepository.findById(id).orElse(null);
        if (existingAdminInquiry != null) {
            // Update the existing admin inquiry with the new data
            existingAdminInquiry.setCourseId(updatedAdminInquiry.getCourseId());
            existingAdminInquiry.setCourseName(updatedAdminInquiry.getCourseName());
            // Set other fields similarly
            return adminInquiryRepository.save(existingAdminInquiry);
        }
        return null;
    }

    public void deleteAdminInquiry(Long id) {
        adminInquiryRepository.deleteById(id);
    }
}
