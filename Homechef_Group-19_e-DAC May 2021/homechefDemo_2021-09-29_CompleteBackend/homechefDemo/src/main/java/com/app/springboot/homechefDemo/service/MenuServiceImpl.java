package com.app.springboot.homechefDemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.springboot.homechefDemo.dao.MenuRepository;
import com.app.springboot.homechefDemo.entity.Chef;
import com.app.springboot.homechefDemo.entity.Menu;
import com.app.springboot.homechefDemo.entity.Speciality;

@Service
public class MenuServiceImpl implements MenuService{
	
	@Autowired
	MenuRepository menuRepository;
	
	public MenuServiceImpl(MenuRepository menRepository)
	{
		this.menuRepository=menRepository;
	}

	@Override
	public List<Menu> findAll() {
		// TODO Auto-generated method stub
		return menuRepository.findAll();
	}

/*	@Override
	public int getSpecialityCount() {
		// TODO Auto-generated method stub
		return menuRepository.getMenuCount();
	}*/

	@Override
	public Menu findById(int menuid) {
		Optional<Menu> m=menuRepository.findById(menuid);
		Menu menu=m.get();
		return menu;
	}

	@Override
	public void save(Menu theMenu) {
		menuRepository.save(theMenu);
		
	}

	@Override
	public void deleteById(int menuid) {
		//Optional<Menu> m=Optional.empty();
		menuRepository.deleteById(menuid);
		
	}

	@Override
	public void updateSpeciality(int menuid, Menu mu) {
		Menu menu = menuRepository.findById(menuid).get();
	      
        System.out.println(mu.toString());
        menu.setChefid(mu.getChefid());
        menu.setCuisineid(mu.getCuisineid());
        menu.setDescription(mu.getDescription());
        menu.setMenuname(mu.getMenuname());
        menuRepository.save(menu);
		
	}

	@Override
	public int getSpecialityCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Menu> getMenubychefid(int chefid) {
		List <Menu> menu = menuRepository.getMenubychefid(chefid);
		menu.forEach(l -> System.out.println(l));
		return menu;
			}

	@Override
	public List<Menu> getMenubycuisineid(int cuisineid) {
		// TODO Auto-generated method stub
		List <Menu> menu = menuRepository.getMenubycuisineid(cuisineid);
		menu.forEach(l -> System.out.println(l));
		return menu;
		
	}
	}


