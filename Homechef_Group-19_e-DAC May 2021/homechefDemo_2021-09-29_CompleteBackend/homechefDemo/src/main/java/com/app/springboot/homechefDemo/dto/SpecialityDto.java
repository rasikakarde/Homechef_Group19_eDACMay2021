package com.app.springboot.homechefDemo.dto;

public class SpecialityDto {
	
	private int specialityid;
	private String specialityimagename;
	
	public SpecialityDto() {}

	public SpecialityDto(int specialityid) {
		super();
		this.specialityid = specialityid;
	}

	public int getSpecialityid() {
		return specialityid;
	}
	
	public String getSpecialityimagename() {
		return specialityimagename;
	}

	public void setSpecialityimagename(String specialityimagename) {
		this.specialityimagename = specialityimagename;
	}

	public SpecialityDto(int specialityid, String specialityimagename) {
		super();
		this.specialityid = specialityid;
		this.specialityimagename = specialityimagename;
	}

}
