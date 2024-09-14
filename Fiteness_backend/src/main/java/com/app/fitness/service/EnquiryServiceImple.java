package com.app.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fitness.entity.Enquiry;
import com.app.fitness.repository.EnquiryDao;



@Service
public class EnquiryServiceImple implements EnquiryService  {

	
	@Autowired
	private EnquiryDao enquiryDao;
	
	
	@Override
	public Enquiry insertEnquiry(Enquiry enquiry) {
		// TODO Auto-generated method stub
		return enquiryDao.save(enquiry);
	}

	@Override
	public List<Enquiry> getAllEnquiry() {
		// TODO Auto-generated method stub
		return enquiryDao.findAll();
	}

	@Override
	public List<Enquiry> getEnquiryByEmail(String email) {
		// TODO Auto-generated method stub
		return enquiryDao.findByEmail(email);
	}

	@Override
	public List<Enquiry> getEnquiryById(int enqid) {
		// TODO Auto-generated method stub
		return enquiryDao.findByEnqid(enqid);
	}

	@Override
	public Enquiry updateEnquiry(Enquiry enquiry) {
		// TODO Auto-generated method stub
		return enquiryDao.save(enquiry);
	}

	@Override
	public void deleteEnquiry(int id) {
		// TODO Auto-generated method stub
		Enquiry enq= enquiryDao.getById(id);
		enquiryDao.delete(enq);
	}

	@Override
	public List<Enquiry> pendingEnquiry(String email, boolean status) {
		// TODO Auto-generated method stub
		return enquiryDao.pendingEnquiry(email, false);
	}

	@Override
	public List<Enquiry> viewAllPendingEnquiry(boolean status) {
		// TODO Auto-generated method stub
		return enquiryDao.viewAllPendingEnquiry(false);
	}

	@Override
	public List<Enquiry> viewPackages(String email, boolean status) {
		// TODO Auto-generated method stub
		return enquiryDao.viewPackage(email, true);
	}

	@Override
	public List<Enquiry> viewAllPackages(boolean status) {
		// TODO Auto-generated method stub
		return enquiryDao.viewAllPackages(true);
	}

}
