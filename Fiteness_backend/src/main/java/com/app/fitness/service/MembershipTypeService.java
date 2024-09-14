package com.app.fitness.service;

import java.util.List;

import com.app.fitness.entity.MembershipType;



public interface MembershipTypeService {
	
	MembershipType findById(int membershipId );
    List<MembershipType> getAll();
    MembershipType save(MembershipType mt);
    MembershipType update(MembershipType mt);
    void deleteById(int membershipId);
}
