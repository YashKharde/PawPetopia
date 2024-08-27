package com.Project.Entity;

import java.util.Date;
import java.util.Set;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


@Entity
public class Pet {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long petId;

	private String category;
	private String name;
	private String gender;
	private Integer age;
	private Double weight;
	private String Story;
	
	private String img1;
	private String img2;
	private String img3;
	private String img4;

	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt;

	@OneToMany(mappedBy = "pet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	
	private Set<Adoption> adoptions;

	@OneToMany(mappedBy = "pet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

	private Set<Ownership> ownerships;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private UserLogin user;

	public UserLogin getUser() {
		return user;
	}

	public void setUser(UserLogin user) {
		this.user = user;
	}
	

	public Pet( String category, String name, String gender, Integer age, Double weight, String story,
			String img1, String img2, String img3,String img4, Date postedAt) {
		super();
		this.category = category;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.weight = weight;
		this.Story = story;
		this.img1 = img1;
		this.img2 = img2;
		this.img3 = img3;
		this.img4 = img4;
		this.postedAt = postedAt;
	}

	public Pet(String category, String name, String gender, String story, Integer age, Double weight, Date postedAt) {
		super();
		this.category = category;
		this.name = name;
		this.gender = gender;
		this.Story = story;
		this.age = age;
		this.weight = weight;
		this.postedAt = postedAt;
	}

	public Pet(Long petId, String category, String name, String gender, Integer age, Double weight, Date postedAt,
			String story) {
		super();
		this.petId = petId;
		this.category = category;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.weight = weight;
		this.postedAt = postedAt;
		Story = story;
	}
	
		
		
		public String getImg4() {
		return img4;
	}

	public void setImg4(String img4) {
		this.img4 = img4;
	}

		public String getImg1() {
	return img1;
	}
	
	public void setImg1(String img1) {
	this.img1 = img1;
	}
	
	public String getImg2() {
	return img2;
	}
	
	public void setImg2(String img2) {
	this.img2 = img2;
	}
	
	public String getImg3() {
	return img3;
	}
	
	public void setImg3(String img3) {
	this.img3 = img3;
	}

	
	public Long getPetId() {
		return petId;
	}

	public void setPetId(Long petId) {
		this.petId = petId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Date getPostedAt() {
		return postedAt;
	}

	public void setPostedAt(Date postedAt) {
		this.postedAt = postedAt;
	}

	public String getStory() {
		return Story;
	}

	public void setStory(String story) {
		Story = story;
	}

	public Set<Adoption> getAdoptions() {
		return adoptions;
	}

	public void setAdoptions(Set<Adoption> adoptions) {
		this.adoptions = adoptions;
	}


	public Set<Ownership> getOwnerships() {
		return ownerships;
	}

	public void setOwnerships(Set<Ownership> ownerships) {
		this.ownerships = ownerships;
	}

	public Pet() {
		super();
	}



	@Override
	public String toString() {
		return "Pet [PetId=" + petId + ", category=" + category + ", name=" + name + ", gender=" + gender + ", age="
				+ age + ", weight=" + weight + ", postedAt=" + postedAt + ", Story=" + Story + "]";
	}

}
