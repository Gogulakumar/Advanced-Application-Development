// AdminInquiryController.java
package com.course.enquiry.aadpro.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.course.enquiry.aadpro.Entity.AdminInquiry;
import com.course.enquiry.aadpro.Service.AdminInquiryService;

import java.util.List;

@RestController
@RequestMapping("/admin/inquiries")
public class AdminInquiryController {

    @Autowired
    private AdminInquiryService adminInquiryService;

    @GetMapping("/all")
    public List<AdminInquiry> getAllAdminInquiries() {
        return adminInquiryService.getAllAdminInquiries();
    }

    @GetMapping("/{id}")
    public AdminInquiry getAdminInquiryById(@PathVariable("id") Long id) {
        return adminInquiryService.getAdminInquiryById(id);
    }

    @PostMapping("/add")
    public AdminInquiry createAdminInquiry(@RequestBody AdminInquiry adminInquiry) {
        return adminInquiryService.createAdminInquiry(adminInquiry);
    }

    @PutMapping("/{id}")
    public AdminInquiry updateAdminInquiry(@PathVariable("id") Long id, @RequestBody AdminInquiry updatedAdminInquiry) {
        return adminInquiryService.updateAdminInquiry(id, updatedAdminInquiry);
    }

    @DeleteMapping("/{id}")
    public void deleteAdminInquiry(@PathVariable("id") Long id) {
        adminInquiryService.deleteAdminInquiry(id);
    }
}
