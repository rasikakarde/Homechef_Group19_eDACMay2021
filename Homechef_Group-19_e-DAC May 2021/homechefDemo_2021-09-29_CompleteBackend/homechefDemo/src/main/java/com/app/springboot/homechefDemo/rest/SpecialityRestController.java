package com.app.springboot.homechefDemo.rest;

import java.io.Console;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.dto.ChefMenuDto;
import com.app.springboot.homechefDemo.entity.*;
import com.app.springboot.homechefDemo.service.SpecialityService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/speciality")
public class SpecialityRestController {
	
	private SpecialityService specialityService;
	
	public SpecialityRestController () {}
	
	@Autowired
	public SpecialityRestController (SpecialityService specialityService) {
		super();
		this.specialityService = specialityService;
	}
	
	@GetMapping("/allSpeciality")
	public List<Speciality> findAll()
	{
		return specialityService.findAll();	
	}
	
	@GetMapping("/getSpecialitybychefid/{chefid}")
	public ResponseEntity<List<Speciality>> getSpecialitybychefid(@PathVariable int chefid){
		//specialityService.getSpecialitybychefid(chefid);		
		//return new ResponseEntity<List<Speciality>>(HttpStatus.OK);
		return new ResponseEntity<List<Speciality>>(specialityService.getSpecialitybychefid(chefid), HttpStatus.OK);

	}
	
	@PostMapping("/saveSpecialityImage")
	public void saveSpecialityImage(@RequestParam int cuisineid,@RequestParam ("image") MultipartFile multipartFile) {
			    
	    //Code to Store Image
	    String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());	    
	    String ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	    long name = new java.sql.Timestamp(System.currentTimeMillis()).getTime();	    
		try {
			specialityService.saveFile(cuisineid, name + "-" + cuisineid + "." + ext, multipartFile);
			specialityService.updateSpecialityImage(cuisineid,name + "-" + cuisineid + "." + ext);
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	        			
	}
	
	@GetMapping("/showImageBySpecialityId/{cuisineid}")
	public String showImageBySpecialityId (@PathVariable int cuisineid) {
		String imagePath= specialityService.findSpecialityImageById(cuisineid);		
		return imagePath;		
	}
	
	
	
	

}
