package com.app.springboot.homechefDemo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="menu")
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="menuid")
	private int menuid;
	
	@Column(name="chefid")
	private int chefid;
	
	@Column(name="cuisineid")
	private int cuisineid;
	
	@Column(name="menuname")
	private String menuname;
	
	@Column(name="description")
	private String description;
	
	@Column(name="price")
	private int price;
	
	@Column(name="image")
	private String image;
	
	 @ManyToOne(optional=false)
	 @JoinColumn(name = "chefid",insertable=false, updatable=false)
	private Chef chef;
	
	public Chef getMenu() {
		return chef;
	}


	public void setChef(Chef chef) {
		this.chef = chef;
	}


	public Menu() {}


	public Menu(int menuid, int chefid, int cuisineid, String menuname, String description, int price, String image) {
		super();
		this.menuid = menuid;
		this.chefid = chefid;
		this.cuisineid = cuisineid;
		this.menuname = menuname;
		this.description = description;
		this.price = price;
		this.image = image;
	}


	public int getMenuid() {
		return menuid;
	}


	public void setMenuid(int menuid) {
		this.menuid = menuid;
	}


	public int getChefid() {
		return chefid;
	}


	public void setChefid(int chefid) {
		this.chefid = chefid;
	}


	public int getCuisineid() {
		return cuisineid;
	}


	public void setCuisineid(int cuisineid) {
		this.cuisineid = cuisineid;
	}


	public String getMenuname() {
		return menuname;
	}


	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	@Override
	public String toString() {
		return "Menu [menuid=" + menuid + ", chefid=" + chefid + ", cuisineid=" + cuisineid + ", menuname=" + menuname
				+ ", description=" + description + ", price=" + price + ", image=" + image + "]";
	}
	
	
	
	
	
	
	

}
