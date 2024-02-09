package com.course.enquiry.aadpro.Controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.enquiry.aadpro.Entity.Inquiry;
import com.course.enquiry.aadpro.Service.InquiryService;



@RestController
@RequestMapping("/inquiries")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    // POST request to create an inquiry
    @PostMapping("/add")
    public Inquiry createInquiry(@RequestBody Inquiry inquiry) {
        return inquiryService.createInquiry(inquiry);
    }

    // GET request to retrieve all inquiries
    @GetMapping("/get")
    public List<Inquiry> getAllInquiries() {
        return inquiryService.getAllInquiries();
    }

    // GET request to retrieve an inquiry by its ID
    @GetMapping("/get/{id}")
    public Inquiry getInquiryById(@PathVariable("id") Long id) {
        return inquiryService.getInquiryById(id);
    }

    // You can add more endpoints as needed for updating, deleting, or retrieving single inquiries
}
