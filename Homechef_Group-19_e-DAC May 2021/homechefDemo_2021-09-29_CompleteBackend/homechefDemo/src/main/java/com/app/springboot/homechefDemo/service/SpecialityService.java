package com.app.springboot.homechefDemo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.entity.Speciality;

public interface SpecialityService {
	
	public List<Speciality> findAll();
	public int getSpecialityCount();
	public Chef findById(int cuisineid); 
	public void save(Chef theSpeciality);
	public void deleteById(int cuisineid);
	void updateSpeciality(int cuisineid, Speciality sp); 
	public List<Speciality> getSpecialitybychefid(int chefid);
	public void saveFile(int cuisineid, String fileName, MultipartFile multipartFile) throws IOException;
	public void updateSpecialityImage(int cuisineid, String fileName);
	public String findSpecialityImageById(int cuisineid); 
	
	
}
	
	

