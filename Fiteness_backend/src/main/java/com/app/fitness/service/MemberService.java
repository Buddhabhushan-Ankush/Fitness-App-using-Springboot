package com.app.fitness.service;

import java.util.List;

import com.app.fitness.entity.Member;



    public interface MemberService {

    public Member insertMember(Member member);
	
	public List<Member> getUMemberByEmailAndPassword(String email,String password);
	
	public List<Member> findByEmail(String email);
	
	public List<Member> findByPhone(String phone);
	
	public List<Member> forgetPassword(String email,String securityQues,String securityAns);
	
	public List<Member> getAllMember();
	//public User updatePassword(User user);
	
	public Member updatePassword(Member member); 
	
	public void deleteMember(String email);
	
}
