package com.Project.Entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
public class Ownership {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ownershipId;
	    
	@ManyToOne
	@JsonManagedReference 
	private UserLogin user;
	
	@ManyToOne
	@JsonManagedReference 
	private Pet pet;
	    
	private Date ownershipEnded;
	
	public Ownership(UserLogin user, Pet pet, Date ownershipEnded) {
        this.user = user;
        this.pet = pet;
        this.ownershipEnded = ownershipEnded;
    }

	public Long getOwnershipId() {
		return ownershipId;
	}

	public void setOwnershipId(Long ownershipId) {
		this.ownershipId = ownershipId;
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

	public Ownership() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ownership(Long ownershipId, UserLogin user, Pet pet, Date ownershipEnded) {
		super();
		this.ownershipId = ownershipId;
		this.user = user;
		this.pet = pet;
		this.ownershipEnded = ownershipEnded;
	}

	public Date getOwnershipEnded() {
		return ownershipEnded;
	}

	public void setOwnershipEnded(Date ownershipEnded) {
		this.ownershipEnded = ownershipEnded;
	}

	@Override
	public String toString() {
		return "Ownership [ownershipId=" + ownershipId + ", user=" + user + ", pet=" + pet + ", ownershipEnded="
				+ ownershipEnded + "]";
	}
	
	
}
