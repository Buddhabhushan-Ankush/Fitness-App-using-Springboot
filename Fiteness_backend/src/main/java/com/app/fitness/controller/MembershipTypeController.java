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
import com.app.fitness.service.MembershipTypeServiceImpl;


@RestController
@CrossOrigin
@RequestMapping("/api/memtype")
public class MembershipTypeController {

	@Autowired
	private MembershipTypeServiceImpl membershipTypeServiceImpl;

	@GetMapping("/getAllMemType")
	public ResponseEntity<List<MembershipType>> getAllModels() {
		try {
			List<MembershipType> models = membershipTypeServiceImpl.getAll();
			return new ResponseEntity<>(models, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// save or update GymMembers
	@PostMapping("/memtype/save") //"/gymmembers/save"
	public ResponseEntity<MembershipType> save(@RequestBody MembershipType mt) {
		System.out.println("inside gym member");
		// System.out.println(gm.toString());
		MembershipType newUser = membershipTypeServiceImpl.save(mt);
		return ResponseEntity.ok(newUser);
		
	}
	
	  //delete MemberType
	   @DeleteMapping("/memtype/delete/{membershipId}")
		public void delete(@PathVariable("membershipId") int id){
		   membershipTypeServiceImpl.deleteById(id);
	   }
	   

}
