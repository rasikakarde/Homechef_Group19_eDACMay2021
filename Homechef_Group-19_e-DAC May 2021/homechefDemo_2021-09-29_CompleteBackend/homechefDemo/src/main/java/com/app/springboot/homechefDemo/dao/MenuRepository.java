package com.app.springboot.homechefDemo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.springboot.homechefDemo.entity.Menu;
import com.app.springboot.homechefDemo.entity.Speciality;

public interface MenuRepository extends JpaRepository <Menu, Integer> {
	
	//@Query(value="select count(menuid) from menu")
	//public int getMenuCount();
	
	@Query("SELECT m FROM Menu m where m.chefid = :chefid")
	public List<Menu> getMenubychefid(@Param("chefid") int chefid);
	
	
	@Query("SELECT m FROM Menu m where m.cuisineid = :cuisineid")
	public List<Menu> getMenubycuisineid(@Param("cuisineid") int cuisineid);

}
