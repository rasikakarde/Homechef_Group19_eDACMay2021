package com.app.springboot.homechefDemo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.springboot.homechefDemo.entity.Speciality;

public interface SpecialityRepository extends JpaRepository<Speciality, Integer>{


	
	@Query("SELECT s FROM Speciality s where s.chefid = :chefid")
	public List<Speciality> getSpecialitybychefid(@Param("chefid") int chefid);
	
	@Transactional
	@Modifying
	@Query("UPDATE Speciality s SET s.specialityimagename = :fileName where cuisineid = :cuisineid")
	public void updateSpecialityImage(int cuisineid, String fileName);

	@Query("SELECT s.specialityimagename FROM Speciality s WHERE s.cuisineid = :cuisineid")
	public String findSpecialityImageById(int cuisineid);
}
