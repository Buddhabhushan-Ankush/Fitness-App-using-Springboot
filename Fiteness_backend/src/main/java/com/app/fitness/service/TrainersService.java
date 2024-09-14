package com.app.fitness.service;

import java.util.List;

import com.app.fitness.entity.Trainers;



public interface TrainersService {
	
	Trainers findById(int trainerId );
    List<Trainers> getAll();
    Trainers save(Trainers mt);
    Trainers update(Trainers mt);
    void deleteById(int trainerId);
}
