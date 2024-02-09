package com.course.enquiry.aadpro.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Inquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String message;
    private String course;
    private Long courseId;
    private String enquiryType;
    

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getMessage() {
        return message;
    }


    public void setMessage(String message) {
        this.message = message;
    }


    public String getCourse() {
        return course;
    }


    public void setCourse(String course) {
        this.course = course;
    }


    public Long getCourseId() {
        return courseId;
    }


    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }


    public String getEnquiryType() {
        return enquiryType;
    }


    public void setEnquiryType(String enquiryType) {
        this.enquiryType = enquiryType;
    }


    public Inquiry() {
    }


    public Inquiry(Long id, String name, String email, String message, String course, Long courseId,
            String enquiryType) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.course = course;
        this.courseId = courseId;
        this.enquiryType = enquiryType;
    }
    

}