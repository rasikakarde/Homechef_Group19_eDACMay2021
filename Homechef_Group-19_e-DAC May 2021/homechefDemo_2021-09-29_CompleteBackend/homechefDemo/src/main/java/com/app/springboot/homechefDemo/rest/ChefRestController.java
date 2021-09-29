package com.app.springboot.homechefDemo.rest;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.springboot.homechefDemo.dao.ChefRepository;
import com.app.springboot.homechefDemo.dto.ChefCityDto;
import com.app.springboot.homechefDemo.dto.ChefDto;
import com.app.springboot.homechefDemo.dto.ChefMenuDto;
import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.service.ChefService;

@RestController
@CrossOrigin(origins = "*")
//@RequestMapping("/api")
public class ChefRestController {

	
	private ChefService chefService;
	
	public ChefRestController() {}
	
	
	@Autowired
	public ChefRestController(ChefService chefService) {
		super();
		this.chefService = chefService;
	}
	
	@GetMapping("/chefs")
	public List<Chef> findAll()
	{
		return chefService.findAll();
	}
	@GetMapping("/chefs/count")
	public int getCount()
	{
		return chefService.getChefCount();
		
	}
	
	@GetMapping("/chefs/{chefid}")
	public Chef getChef(@PathVariable int chefid)
	{
		Chef theChef=chefService.findById(chefid);
		if(theChef==null)
		{
			throw new RuntimeException("Chef not found "+chefid);
		}
		return theChef;
	}
		
	/*
	@PostMapping("/chefs")
	public Chef addChef(@RequestBody Chef theChef)
	{
		theChef.setChefid(0);
		chefService.save(theChef);
		return theChef;
		
	}*/
	
	 
	@PutMapping("/updateChef/{chefid}")
	public void updateChef(@PathVariable int chefid,@RequestBody Chef theChef)
	{
		chefService.updateChef(chefid,theChef);		
	}
	
	@GetMapping("/chefsd/{chefid}")
	public void deleteChef(@PathVariable int chefid)
	{
		chefService.deleteById(chefid);
	}
	
	@GetMapping("/getAllChefDetailsById/{chefid}")
	public ResponseEntity<List<ChefMenuDto>> getAllChefDetailsById(@PathVariable int chefid) {
		//List<ChefMenuDto> chefMenuDto= chefService.getAllChefDetailsById(chefid);
		return new ResponseEntity<List<ChefMenuDto>>(chefService.getAllChefDetailsById(chefid), HttpStatus.OK);
		
	}
	
	@PostMapping("/processRegister")
	public Chef processRegister(@RequestBody Chef theChef) {
		
		//Code encrypt password
//		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//	    String encodedPassword = passwordEncoder.encode(theChef.getPassword());
//	    theChef.setPassword(encodedPassword);	
	    chefService.save(theChef);       
		return theChef;		
	}
	
	
	@PostMapping("/saveChefImage")
	public void saveChefImage(@RequestParam int chefid,@RequestParam ("image") MultipartFile multipartFile) {
			    
	    //Code to Store Image
	    String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());	    
	    String ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	    long name = new java.sql.Timestamp(System.currentTimeMillis()).getTime();	    
		try {
			chefService.saveFile(chefid, name + "-" + chefid + "." + ext, multipartFile);
			chefService.updateChefImage(chefid,name + "-" + chefid + "." + ext);
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	        			
	}
	
	@GetMapping("/showImageByChefId/{chefid}")
	public String showImageByChefId (@PathVariable int chefid) {
		String imagePath= chefService.findChefImageById(chefid);		
		return imagePath;		
	}
		
	@GetMapping("/getChefByCity/{city}")
	public ResponseEntity<List<Chef>> getChefByCity(@PathVariable String city){
		chefService.getChefByCity(city);		
		return new ResponseEntity<List<Chef>>(chefService.getChefByCity(city), HttpStatus.OK);	
	}
	
	@GetMapping("/getChefByCuisineid/{cuisineid}")
	public ResponseEntity<List<Chef>> getChefByCuisineid(@PathVariable int cuisineid){
		chefService.getChefByCuisineid(cuisineid);		
		return new ResponseEntity<List<Chef>>(chefService.getChefByCuisineid(cuisineid), HttpStatus.OK);	
	}
	
	@PostMapping("/cheflogin")
	public boolean login(@RequestBody Chef chef, Model model) {
		System.out.println("Chef Details= "+chef);
		Chef chef1 = chefService.validateUser(chef);
		System.out.println("Chef Id="+chef1);
		
		boolean isValidUser = false;
		
		if (null != chef1.getEmailid() && chef1.getEmailid().equals(chef.getEmailid())
		        && chef1.getPassword() != null && chef1.getPassword().equals(chef.getPassword())) {
		      isValidUser = true;
//		      model.addAttribute("emailid", chef1.getEmailid());
//		      model.addAttribute("password",chef1.getPassword());
		      System.out.println("Matched");
		    }else {
		    	System.out.println("not Matched");
		    	isValidUser=false;
		    }
		
		return  isValidUser ;
			
	}
	

//	@PostMapping("/cheflogin")
//	public String login(@RequestBody Chef chef) {
//		boolean isValidUser = false;
//		System.out.println("data="+chef);
//		isValidUser = true;
//		return isValidUser ? "welcome" : "login" ;
//	}
//	
	
	
	
	
	
}