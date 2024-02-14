package com.course.enquiry.aadpro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;




@SpringBootApplication

@OpenAPIDefinition(
		info =@Info(
				title = "Course Inquiry",
				version = "1.1.2",
				description = "Enroll pannunga",
				contact = @Contact(
						name = "Author Name",
						email = "Author Email"
						)
				)
		)
public class AadproApplication {

	public static void main(String[] args) {
		SpringApplication.run(AadproApplication.class, args);
	}

}
