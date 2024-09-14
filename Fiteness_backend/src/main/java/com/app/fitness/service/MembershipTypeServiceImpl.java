package com.app.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fitness.entity.MembershipType;
import com.app.fitness.repository.MembershipTypeDao;

@Service
public class MembershipTypeServiceImpl implements MembershipTypeService{

	@Autowired
	private MembershipTypeDao membershipTypeDao;
	
	@Override
	public MembershipType findById(int membershipId) {
		// TODO Auto-generated method stub
		return membershipTypeDao.findById(membershipId).get();
	}

	@Override
	public List<MembershipType> getAll() {
		// TODO Auto-generated method stub
		return membershipTypeDao.findAll();
	}

	@Override
	public MembershipType save(MembershipType mt) {
		// TODO Auto-generated method stub
		return membershipTypeDao.save(mt);
	}

	@Override
	public MembershipType update(MembershipType mt) {
		// TODO Auto-generated method stub
		return membershipTypeDao.save(mt);
	}

	@Override
	public void deleteById(int membershipId) {
		// TODO Auto-generated method stub
		membershipTypeDao.deleteById(membershipId);
		
	}

}
