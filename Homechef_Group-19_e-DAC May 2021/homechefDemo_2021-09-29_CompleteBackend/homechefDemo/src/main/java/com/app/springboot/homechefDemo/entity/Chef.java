package com.app.springboot.homechefDemo.entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="chefdetails")
public class Chef implements Serializable{

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	@Column(name="chefid")
	private int chefid;
	
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@Column(name="address")
	private String address;
	
	@Column(name="city")
	private String city;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="password")
	private String password;
	
	@Column(name="contactnumber")
	private BigInteger contactnumber;
	
	@Column(name="status")
	private String status;
	
	@Column(name="chefimagename")
	private String chefimagename;	
	
	@Column(name="cuisineid")
	private int cuisineid;
	
	@JsonIgnore
	@OneToMany(targetEntity=Menu.class ,mappedBy = "chef" )		
	private Set<Menu> menu;
	
	public Set<Menu> getMenu() {
		return menu;
	}

	public void setMenu(Set<Menu> menu) {
		this.menu = menu;
	}

	public Chef()
	{}

	

	public Chef(int chefid, String firstname, String lastname, String address, String city, String emailid,
			String password, BigInteger contactnumber,int cuisineid,String status, String chefimagename, Set<Menu> menu) {
		super();
		this.chefid = chefid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.city = city;
		this.emailid = emailid;
		this.password = password;
		this.contactnumber = contactnumber;
		this.status = status;
		this.cuisineid=cuisineid;
		this.chefimagename = chefimagename;
		this.menu = menu;
	}

	
	 	
	public int getChefid() {
		return chefid;
	}

	public void setChefid(int chefid) {
		this.chefid = chefid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public BigInteger getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(BigInteger contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getChefimagename() {
		return "/homechefDemo/" + chefid + "/" + chefimagename;
	}

	public void setChefimagename(String chefimagename) {
		this.chefimagename = chefimagename;
	}

	
	
	
	public int getCuisineid() {
		return cuisineid;
	}

	public void setCuisineid(int cuisineid) {
		this.cuisineid = cuisineid;
	}

	@Override
	public String toString() {
		return "Chef [chefid=" + chefid + ", firstname=" + firstname + ", lastname=" + lastname + ", address=" + address
				+ ", city=" + city + ", emailid=" + emailid + ", password=" + password + ", contactnumber="
				+ contactnumber + ", status=" + status + ", chefimagename=" + chefimagename + ", cuisineid=" + cuisineid
				+ ", menu=" + menu + "]";
	}

	

	

	
	
	
	
}
