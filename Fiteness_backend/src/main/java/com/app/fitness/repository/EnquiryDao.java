package com.app.fitness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.fitness.entity.Enquiry;





@Repository
public interface EnquiryDao extends JpaRepository<Enquiry, Integer> {
	
public List<Enquiry> findByEmail(String email);
	
	public List<Enquiry> findByEnqid(int enqid);
	
	@Query("select r from Enquiry r where email=:e and status=:s")
	public List<Enquiry> pendingEnquiry(@Param("e") String email,@Param("s") boolean status);
	
	@Query("select r from Enquiry r where email=:e and status=:s")
	public List<Enquiry> viewPackage(@Param("e") String email,@Param("s") boolean status);

	@Query("select r from Enquiry r where status=:s")
	public List<Enquiry> viewAllPendingEnquiry(@Param("s") boolean status);

	@Query("select r from Enquiry r where status=:s")
	public List<Enquiry> viewAllPackages(@Param("s") boolean status);
	
}
