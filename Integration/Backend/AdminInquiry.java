// AdminInquiry.java
package com.course.enquiry.aadpro.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminInquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String courseId;
    private String courseName;
    public AdminInquiry(Long id, String courseId, String courseName, String adminName, String gender,
            String nationality, String contactNumber, String qualification, String yearOfPassing, String collegeName,
            String paymentMethod) {
        this.id = id;
        this.courseId = courseId;
        this.courseName = courseName;
        this.adminName = adminName;
        this.gender = gender;
        this.nationality = nationality;
        this.contactNumber = contactNumber;
        this.qualification = qualification;
        this.yearOfPassing = yearOfPassing;
        this.collegeName = collegeName;
        this.paymentMethod = paymentMethod;
    }
    private String adminName;
    private String gender;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getCourseId() {
        return courseId;
    }
    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
    public String getCourseName() {
        return courseName;
    }
    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
    public String getAdminName() {
        return adminName;
    }
    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getNationality() {
        return nationality;
    }
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
    public String getQualification() {
        return qualification;
    }
    public void setQualification(String qualification) {
        this.qualification = qualification;
    }
    public String getYearOfPassing() {
        return yearOfPassing;
    }
    public void setYearOfPassing(String yearOfPassing) {
        this.yearOfPassing = yearOfPassing;
    }
    public String getCollegeName() {
        return collegeName;
    }
    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }
    public String getPaymentMethod() {
        return paymentMethod;
    }
    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    private String nationality;
    private String contactNumber;
    private String qualification;
    private String yearOfPassing;
    private String collegeName;
    private String paymentMethod;

    public AdminInquiry(){
        
    }
    // Getters and setters
    // Constructor
}
