package com.app.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.fitness.entity.MembershipType;

@Repository
public interface MembershipTypeDao extends JpaRepository<MembershipType,Integer>{

}
