package com.app.springboot.homechefDemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="userid")
	private int userid;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="address")
	private String address;
	
	@Column(name="contact")
	private int contact;
	
	@Column(name="city")
	private String city;
	
	public Users() {}
	

	public Users(int userid, String username, String password, String emailid, String address, int contact,
			String city) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.emailid = emailid;
		this.address = address;
		this.contact = contact;
		this.city = city;
	}


	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getContact() {
		return contact;
	}

	public void setContact(int contact) {
		this.contact = contact;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Users [userid=" + userid + ", username=" + username + ", password=" + password + ", emailid=" + emailid
				+ ", address=" + address + ", contact=" + contact + ", city=" + city + "]";
	}
	
	

}
