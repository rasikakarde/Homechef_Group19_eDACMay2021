package com.app.springboot.homechefDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springboot.homechefDemo.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{

}
