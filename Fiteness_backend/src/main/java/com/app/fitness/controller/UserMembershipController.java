package com.app.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.fitness.entity.MembershipType;
import com.app.fitness.entity.UserMembership;
import com.app.fitness.service.UserMembershipServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/api/usermemship")
public class UserMembershipController {

	@Autowired
	private UserMembershipServiceImpl userMembershipServiceImpl;
	
	@GetMapping("/getAllusermem")
	public ResponseEntity<List<UserMembership>> getAllModels() {
		try {
			List<UserMembership> models = userMembershipServiceImpl.getAll();
			return new ResponseEntity<>(models, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// save or update GymMembers
	@PostMapping("/usermemship/save") //"/gymmembers/save"
	public ResponseEntity<UserMembership> save(@RequestBody UserMembership ms) {
		System.out.println("inside gym member");
		// System.out.println(gm.toString());
		 UserMembership newUser = userMembershipServiceImpl.save(ms);
		return ResponseEntity.ok(newUser);
		
	}
	
	  //delete MemberType
	   @DeleteMapping("/usermemship/delete/{userMembershipId}")
		public void delete(@PathVariable("userMembershipId") int id){
		   userMembershipServiceImpl.deleteById(id);
	   }
}
