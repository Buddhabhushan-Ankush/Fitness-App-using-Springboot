package com.app.fitness.service;

import java.util.List;

import com.app.fitness.entity.UserMembership;



public interface UserMembershipService {
	
	UserMembership findById(int userMembershipId );
    List<UserMembership> getAll();
    UserMembership save(UserMembership mt);
    UserMembership update(UserMembership mt);
    void deleteById(int userMembershipId);
}
