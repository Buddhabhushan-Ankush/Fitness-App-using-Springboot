package com.app.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fitness.entity.UserMembership;
import com.app.fitness.repository.UserMembershipDao;

@Service
public class UserMembershipServiceImpl implements UserMembershipService{

	@Autowired
	private UserMembershipDao userMembershipDao;
	
	@Override
	public UserMembership findById(int userMembershipId) {
		
		return userMembershipDao.findById(userMembershipId).get();
	}

	@Override
	public List<UserMembership> getAll() {
		
		return userMembershipDao.findAll();
	}

	@Override
	public UserMembership save(UserMembership mt) {
		
		return userMembershipDao.save(mt);
	}

	@Override
	public UserMembership update(UserMembership mt) {
		
		return userMembershipDao.save(mt);
	}

	@Override
	public void deleteById(int userMembershipId) {
		
		userMembershipDao.deleteById(userMembershipId);
		
	}

}
