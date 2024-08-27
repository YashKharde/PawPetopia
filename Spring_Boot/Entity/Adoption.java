package com.Project.Entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;



@Entity
public class Adoption {

	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long adoptionId;
	
	 @ManyToOne
	 @JsonIgnoreProperties({"sentMessages", "receivedMessages"})
	 private UserLogin user;
	    
	 @ManyToOne
	 @JsonIgnoreProperties({"sentMessages", "receivedMessages"})
	 private Pet pet;
	    
	 private Date AdopDate;

	public Long getAdoptionId() {
		return adoptionId;
	}

	public void setAdoptionId(Long adoptionId) {
		this.adoptionId = adoptionId;
	}

	public UserLogin getUser() {
		return user;
	}

	public void setUser(UserLogin user) {
		this.user = user;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public Date getAdopDate() {
		return AdopDate;
	}

	public void setAdopDate(Date adopDate) {
		AdopDate = adopDate;
	}

	public Adoption() {
		super();
	}

	public Adoption(UserLogin user, Pet pet, Date adopDate) {
		super();
		this.user = user;
		this.pet = pet;
		AdopDate = adopDate;
	}

	@Override
	public String toString() {
		return "Adoption [adoptionId=" + adoptionId + ", user=" + user + ", pet=" + pet + ", AdopDate=" + AdopDate
				+ "]";
	}
	 
	 
	 
	 
}
