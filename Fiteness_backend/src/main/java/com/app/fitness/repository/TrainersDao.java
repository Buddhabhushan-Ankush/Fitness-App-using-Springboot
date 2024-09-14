package com.app.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.fitness.entity.Trainers;


@Repository
public interface TrainersDao extends JpaRepository<Trainers,Integer>{

}
