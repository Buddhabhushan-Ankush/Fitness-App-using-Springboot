package com.app.fitness.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fitness.entity.Trainers;
import com.app.fitness.repository.TrainersDao;


@Service
public class TrainersServiceImpl implements TrainersService{

	@Autowired
	private TrainersDao trainersDao;
	
	@Override
	public Trainers findById(int trainerId) {
		return trainersDao.findById(trainerId).get();
	}

	@Override
	public List<Trainers> getAll() {
		
		return trainersDao.findAll();
	}

	@Override
	public Trainers save(Trainers mt) {
		
		return trainersDao.save(mt);
	}

	@Override
	public Trainers update(Trainers mt) {
		
		return trainersDao.save(mt);
	}

	@Override
	public void deleteById(int trainerId) {
		trainersDao.deleteById(trainerId);
		
	}

}
