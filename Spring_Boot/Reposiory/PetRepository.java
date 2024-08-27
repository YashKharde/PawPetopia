package com.Project.Reposiory;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Project.Entity.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
	
	 List<Pet> findByCategory(String category);
	 List<Pet> findByAge(Integer age);
	 List<Pet> findByWeight(Double weight);
	 List<Pet> findByPostedAt(Date postedAt);
	 List<Pet> findByUser_UserId(Long userId);	//Gets all the pet using userID
	
	    @Query("SELECT p.id FROM Pet p WHERE p.user.id = :userId")
	    Long findPetIdByUserId(@Param("userId") long userId);			// Gets petId Using userId
	    
	    List<Pet> findAllByOrderByWeightAsc();			// Weight 
	 
}
