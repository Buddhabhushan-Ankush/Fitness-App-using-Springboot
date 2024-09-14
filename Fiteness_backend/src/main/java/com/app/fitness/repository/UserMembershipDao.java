package com.app.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.fitness.entity.UserMembership;


@Repository
public interface UserMembershipDao extends JpaRepository<UserMembership,Integer>{

}
