package com.app.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.fitness.entity.Member;
import com.app.fitness.repository.MemberDao;



@Service
public class MemberServiceImple  implements MemberService{

	@Autowired
	private MemberDao memberDao;
	
	@Override
	public Member insertMember(Member member) {
		// TODO Auto-generated method stub
		return memberDao.save(member);
	}

	@Override
	public List<Member> getUMemberByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return memberDao.findByEmailAndPassword(email, password);
	}

	@Override
	public List<Member> findByEmail(String email) {
		// TODO Auto-generated method stub
		return memberDao.findByEmail(email);
	}

	@Override
	public List<Member> findByPhone(String phone) {
		// TODO Auto-generated method stub
		return memberDao.findByPhone(phone);
	}

	@Override
	public List<Member> forgetPassword(String email, String securityQues, String securityAns) {
		// TODO Auto-generated method stub
		return memberDao.findByEmailAndSecurityQuesAndSecurityAns(email, securityQues, securityAns);
	}

	@Override
	public List<Member> getAllMember() {
		// TODO Auto-generated method stub
		return this.memberDao.findAll();
	}

	@Override
	public Member updatePassword(Member member) {
		// TODO Auto-generated method stub
		Member m = memberDao.getById(member.getEmail());
		m.setPassword(member.getPassword());
		return memberDao.save(m);
	}

	@Override
	public void deleteMember(String email) {
		// TODO Auto-generated method stub
		Member member =  memberDao.getById(email);
		memberDao.delete(member);
	}

}
