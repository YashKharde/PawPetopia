package com.Project.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.Project.Entity.Pet;

public interface PetService {
	
	
    Pet save(Pet pet);
    Pet update(Pet pet);
    Optional<Pet> findById(Long id);
    List<Pet> getAll();
    void deletePet(Long petId);
    List<Pet> getAllPet(Long userId);
	Long petId(long id);
	List<Pet> getAllbyWeight();
    
	
}
