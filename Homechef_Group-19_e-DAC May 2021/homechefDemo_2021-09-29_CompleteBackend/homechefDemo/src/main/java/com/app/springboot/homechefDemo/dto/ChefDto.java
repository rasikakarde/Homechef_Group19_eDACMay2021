package com.app.springboot.homechefDemo.dto;

public class ChefDto {
	
	private int chefid;
	
	private String chefimagename;
	
	
	
	public ChefDto() {}

	public ChefDto(int chefid) {
		super();
		this.chefid = chefid;
	}

	public int getChefid() {
		return chefid;
	}

	public void setChefid(int chefid) {
		this.chefid = chefid;
	}

	public String getChefimagename() {
		return chefimagename;
	}

	public void setChefimagename(String chefimagename) {
		this.chefimagename = chefimagename;
	}

	public ChefDto(int chefid, String chefimagename) {
		super();
		this.chefid = chefid;
		this.chefimagename = chefimagename;
	}

	
	
	

}
