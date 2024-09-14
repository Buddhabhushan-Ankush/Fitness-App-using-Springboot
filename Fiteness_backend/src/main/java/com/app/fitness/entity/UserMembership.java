package com.app.fitness.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserMembership {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userMembershipId;

	private String userId;

	private int membershipId;

	private Date startDate;

	private Date endDate;

	// Getters and Setters
	public int getUserMembershipId() {
		return userMembershipId;
	}

	public void setUserMembershipId(int userMembershipId) {
		this.userMembershipId = userMembershipId;
	}

	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getMembershipId() {
		return membershipId;
	}

	public void setMembershipId(int membershipId) {
		this.membershipId = membershipId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
}
