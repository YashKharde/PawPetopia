package com.Project.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.Entity.Pet;

import com.Project.Reposiory.PetRepository;

@Service
public class PetServiceImpl implements PetService {
    
    @Autowired
    private PetRepository petRepository;
    

    
    @Override
    public Pet save(Pet pet) {
        pet.setPostedAt(new Date());
        return petRepository.save(pet);
    }

    @Override
    public Pet update(Pet pet) {
        return petRepository.save(pet);
    }


    @Override
    public Optional<Pet> findById(Long id) {
        return petRepository.findById(id);
    }
    
    @Override
    public void deletePet(Long petId) {
        petRepository.deleteById(petId);
    }
    
    @Override
    public List<Pet> getAll() {
        return petRepository.findAll();
    }

	@Override
	public List<Pet> getAllPet(Long userId) {
		List <Pet> pets=petRepository.findByUser_UserId(userId);
		return pets;
	}

	@Override
	public Long petId(long id) {
		
		Long pID =petRepository.findPetIdByUserId(id);
		
		return pID;
	}

	@Override
    public List<Pet> getAllbyWeight() {
        return petRepository.findAllByOrderByWeightAsc();
    }





	

	
}
