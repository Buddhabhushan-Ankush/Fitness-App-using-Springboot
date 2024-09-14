package com.app.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.fitness.entity.Enquiry;
import com.app.fitness.service.EnquiryServiceImple;



@CrossOrigin
@RestController
public class EnquiryController {

	@Autowired
	private EnquiryServiceImple enquiryServiceImple;
	
	@PostMapping("/requests")
	public Enquiry insertEnquiry(@RequestBody Enquiry enquiry) {
		return enquiryServiceImple.insertEnquiry(enquiry);
	}
	
	@GetMapping("/requests")
	public List<Enquiry> getAllEnquiry() {	
		return enquiryServiceImple.getAllEnquiry();
	}
	
	@GetMapping("/requests/{remail}")
	public List<Enquiry> getEnquiryByEmail(@PathVariable String remail) {	
		return 	enquiryServiceImple.getEnquiryByEmail(remail);
	}
	
	@GetMapping("/getrequests/{rid}")
	public List<Enquiry> getEnquiryById(@PathVariable int rid) {	
		return enquiryServiceImple.getEnquiryById(rid);
	}
	
	@PostMapping("/pendingrequests")
	public List<Enquiry> getPendingEnquiry(@RequestBody Enquiry enquiry){
		return enquiryServiceImple.pendingEnquiry(enquiry.getEmail(), false);
	}
	
	@GetMapping("/viewallpendingrequests")
	public List<Enquiry> getPendingEnquiry(boolean status){
		return enquiryServiceImple.viewAllPendingEnquiry(false);
	}
	
	@GetMapping("/viewcollections")
	public List<Enquiry> viewAllPackages(boolean status){
		return enquiryServiceImple.viewAllPackages(status);
	}
	
	@PostMapping("/viewdonations")
	public List<Enquiry> viewpackages(@RequestBody  Enquiry enquiry){
		return enquiryServiceImple.viewPackages(enquiry.getEmail(), true);
	}
	@PutMapping("/requests")
	public Enquiry updateEnquiry(@RequestBody Enquiry enquiry) {	
		return 	enquiryServiceImple.updateEnquiry(enquiry);
	}
	
	@DeleteMapping("/requests/{rid}")
	public String deleteEnquiry(@PathVariable int rid) {	
		enquiryServiceImple.deleteEnquiry(rid); 
			
		 return "Deleted";
	}
	
	
}
