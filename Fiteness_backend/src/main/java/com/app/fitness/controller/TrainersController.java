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
import com.app.fitness.entity.Trainers;
import com.app.fitness.service.TrainersServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/api/trainer")
public class TrainersController {
	
	@Autowired
	private TrainersServiceImpl trainersServiceImpl;
	
	@GetMapping("/getAllTrainers")
	public ResponseEntity<List<Trainers>> getAllModels() {
		try {
			List<Trainers> models = trainersServiceImpl.getAll();
			return new ResponseEntity<>(models, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	// save or update GymMembers
	@PostMapping("/trainer/save") //"/gymmembers/save"
	public ResponseEntity<Trainers> save(@RequestBody Trainers mt) {
		System.out.println("inside gym member");
		// System.out.println(gm.toString());
		 Trainers newUser = trainersServiceImpl.save(mt);
		return ResponseEntity.ok(newUser);
		
	}
	
	  //delete MemberType
	   @DeleteMapping("/trainer/delete/{trainerId}")
		public void delete(@PathVariable("trainerId") int id){
		   trainersServiceImpl.deleteById(id);
	   }
}
