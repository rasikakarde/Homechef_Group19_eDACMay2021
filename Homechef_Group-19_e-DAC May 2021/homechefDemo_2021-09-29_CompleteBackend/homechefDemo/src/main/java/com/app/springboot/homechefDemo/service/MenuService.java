package com.app.springboot.homechefDemo.service;

import java.util.List;

import com.app.springboot.homechefDemo.entity.Menu;
import com.app.springboot.homechefDemo.entity.Speciality;

public interface MenuService {
	
	public List<Menu> findAll();
	public int getSpecialityCount();
	public Menu findById(int menuid); 
	public void save(Menu theMenu);
	public void deleteById(int menuid);
	void updateSpeciality(int menuid, Menu mu); 
	public List<Menu> getMenubychefid(int chefid);
	public List<Menu> getMenubycuisineid(int cuisineid);
	
}
