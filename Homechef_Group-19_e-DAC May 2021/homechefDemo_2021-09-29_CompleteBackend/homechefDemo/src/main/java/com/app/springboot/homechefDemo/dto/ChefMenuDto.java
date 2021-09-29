package com.app.springboot.homechefDemo.dto;

public class ChefMenuDto {
	
	private String chefMenuName;
	private String chefDescription;
	private int chefPrice;
	private String chefImage;
	
	
	public ChefMenuDto(String chefMenuName, String chefDescription, int chefPrice, String chefImage) {
		super();
		this.chefMenuName = chefMenuName;
		this.chefDescription = chefDescription;
		this.chefPrice = chefPrice;
		this.chefImage = chefImage;
	}


	public String getChefMenuName() {
		return chefMenuName;
	}


	public void setChefMenuName(String chefMenuName) {
		this.chefMenuName = chefMenuName;
	}


	public String getChefDescription() {
		return chefDescription;
	}


	public void setChefDescription(String chefDescription) {
		this.chefDescription = chefDescription;
	}


	public int getChefPrice() {
		return chefPrice;
	}


	public void setChefPrice(int chefPrice) {
		this.chefPrice = chefPrice;
	}


	public String getChefImage() {
		return chefImage;
	}


	public void setChefImage(String chefImage) {
		this.chefImage = chefImage;
	}


	@Override
	public String toString() {
		return "ChefMenuDto [chefMenuName=" + chefMenuName + ", chefDescription=" + chefDescription + ", chefPrice="
				+ chefPrice + ", chefImage=" + chefImage + "]";
	}
	
	

}
