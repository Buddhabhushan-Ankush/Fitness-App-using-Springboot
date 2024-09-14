package com.app.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.fitness.entity.Member;
import com.app.fitness.service.MemberServiceImple;

//import com.gym.phoenixgym.entity.Member;
//import com.gym.phoenixgym.service.MemberService;



@CrossOrigin
@RestController
public class MemberController {

	@Autowired
	private MemberServiceImple memberServicempl;
	
	@GetMapping("/getallusers")
	public List<Member> getAllMembers(Member member){	
		return memberServicempl.getAllMember();	
	}
	
	@PostMapping("/forget")
	public List<Member> forgetPassword(@RequestBody Member member){
		return memberServicempl.forgetPassword(member.getEmail(), member.getSecurityQues(), member.getSecurityAns());
	}
	
	@PostMapping("/findbyphone")
	public List<Member> findByPhone(@RequestBody Member member) {
		return memberServicempl.findByPhone(member.getPhone());
	}
	@PostMapping("/findbyemail")
	public List<Member> findByEmail(@RequestBody Member member) {
		return memberServicempl.findByEmail(member.getEmail());
	}
	
	@PostMapping("/login")
	public List<Member> getUserByEmailAndPassword(@RequestBody Member member){
		return memberServicempl.getUMemberByEmailAndPassword(member.getEmail(), member.getPassword());
		}
	@PostMapping("/register")
	public Member insertMember(@RequestBody Member member) {
		return memberServicempl.insertMember(member);
	}
	@PutMapping("/updatepassword")
	public Member updatePassword(@RequestBody Member member) {
		return memberServicempl.updatePassword(member);
	}
	
	@DeleteMapping("deleteuser/{uemail}")
	public String deleteMember(@PathVariable String uemail) {
		memberServicempl.deleteMember(uemail);
		return "Deleted";
	}
	
	
}
