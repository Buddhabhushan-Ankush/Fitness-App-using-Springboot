package com.app.fitness.service;

import java.util.List;

import com.app.fitness.entity.Enquiry;



public interface EnquiryService {

public Enquiry insertEnquiry(Enquiry enquiry);
	
	public List<Enquiry> getAllEnquiry();
	
	public List<Enquiry> getEnquiryByEmail(String email);
	
	public List<Enquiry> getEnquiryById(int enqid);
	
	
	
	public Enquiry updateEnquiry(Enquiry enquiry);
	
	
	public void deleteEnquiry(int id);
	
	public List<Enquiry> pendingEnquiry(String email,boolean status);
	public List<Enquiry> viewAllPendingEnquiry(boolean status);
	
	public List<Enquiry> viewPackages(String email,boolean status);
	public List<Enquiry> viewAllPackages(boolean status);
	
	
}
