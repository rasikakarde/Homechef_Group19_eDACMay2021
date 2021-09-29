package com.app.springboot.homechefDemo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springboot.homechefDemo.entity.Menu;
import com.app.springboot.homechefDemo.entity.Speciality;
import com.app.springboot.homechefDemo.service.MenuService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/menu")
public class MenuRestController {
	
	private MenuService menuService;
	
	public MenuRestController() {}
	@Autowired
	public MenuRestController(MenuService menuService) {
		super();
		this.menuService=menuService; 
	}
	
	@GetMapping("/allMenu")
	public List<Menu> findAll(){
		return menuService.findAll();
	}
	
	@GetMapping("/getMenubychefid/{chefid}")
	public ResponseEntity<List<Menu>> getMenubychefid(@PathVariable int chefid){
		//specialityService.getSpecialitybychefid(chefid);		
		//return new ResponseEntity<List<Speciality>>(HttpStatus.OK);
		return new ResponseEntity<List<Menu>>(menuService.getMenubychefid(chefid), HttpStatus.OK);

	}
	
	@GetMapping("/getMenubycuisineid/{cuisineid}")
	public ResponseEntity<List<Menu>> getMenubycuisineid(@PathVariable int cuisineid){
		//specialityService.getMenubycuisineid(cuisineid);		
		//return new ResponseEntity<List<Speciality>>(HttpStatus.OK);
		return new ResponseEntity<List<Menu>>(menuService.getMenubycuisineid(cuisineid), HttpStatus.OK);

	}
	

}
