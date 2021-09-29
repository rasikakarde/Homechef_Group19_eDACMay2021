package com.app.springboot.homechefDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.springboot.homechefDemo.dao.ChefRepository;
import com.app.springboot.homechefDemo.entity.Chef;

public class ChefLoginDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private ChefRepository chefRepository;

	@Override
	public UserDetails loadUserByUsername(String emailid) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Chef chef =chefRepository.getUserByUsername(emailid);
		
		if (chef == null) {
            throw new UsernameNotFoundException("Could not find user");
        }
         
        return new ChefloginDetails(chef);
	}

	
	
}
