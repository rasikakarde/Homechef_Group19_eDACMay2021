package com.app.springboot.homechefDemo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.dto.ChefCityDto;
import com.app.springboot.homechefDemo.dto.ChefMenuDto;
import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.entity.Menu;



public interface ChefService {
	public List<Chef> findAll();
	public int getChefCount();
	public Chef findById(int chefid); 
	public Chef save(Chef theChef);
	public void deleteById(int chefid);
	Chef updateChef(int chefid, Chef cd); 
	public List<ChefMenuDto> getAllChefDetailsById(int chefid);
	//public Chef validateUser(Chef cheflogin);
	public void saveFile(int chefid, String fileName, MultipartFile multipartFile) throws IOException;
	public void updateChefImage(int chefid, String fileName);
	public String findChefImageById(int chefid);
	public List<Chef> getChefByCity(String city);
	public List<Chef> getChefByCuisineid(int cuisineid);
	public Chef validateUser(Chef cheflogin);
	
	
}