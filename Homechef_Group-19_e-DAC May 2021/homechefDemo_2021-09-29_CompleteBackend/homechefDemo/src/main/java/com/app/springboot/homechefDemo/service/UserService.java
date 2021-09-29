package com.app.springboot.homechefDemo.service;

import java.util.List;

import com.app.springboot.homechefDemo.entity.Users;

public interface UserService {
	
	public List<Users> findAll();
	public int getSpecialityCount();
	public Users findById(int userid); 
	public void save(Users theUser);
	public void deleteById(int userid);
	void updateSpeciality(int userid, Users usr);

}
