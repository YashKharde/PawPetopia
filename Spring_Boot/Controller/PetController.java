package com.Project.Controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Project.Entity.Pet;
import com.Project.Entity.UserLogin;
import com.Project.service.PetService;
import com.Project.service.UserService;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin
public class PetController {

    @Autowired
    private PetService petService;
    
    @Autowired
    private UserService userService;
    
    
    @PostMapping
    public Pet createPet(																//-------------> New Pet
        @RequestParam("userEmail") String email,
        @RequestParam("category") String category,
        @RequestParam("name") String name,
        @RequestParam("gender") String gender,
        @RequestParam("story") String story,
        @RequestParam("age") Integer age,
        @RequestParam("weight") Double weight,
        @RequestParam("img1") String img1,
        @RequestParam("img2") String img2,
        @RequestParam("img3") String img3,
        @RequestParam("img4") String img4,
        @RequestParam("postedAt") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") Date postedAt
    ) {
        // Fetch the user
        UserLogin user = userService.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // Create a new Pet entity and set the user
        Pet pet = new Pet(category, name, gender, age,weight, story,img1, img2, img3,img4, postedAt);
        pet.setUser(user);

        // Save the Pet entity
        Pet savedPet = petService.save(pet);
        return savedPet;
    }
    
 
    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(									//-------------------> update
    		@PathVariable Long id,
    		@RequestParam("category") String category,
    		@RequestParam("name") String name,
    		@RequestParam("gender") String gender,
    		@RequestParam("story") String story,
    		@RequestParam("age") Integer age,
    		@RequestParam("weight") Double weight,
    		@RequestParam("postedAt") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") Date postedAt) {
        Optional<Pet> op1 = petService.findById(id);
        if (op1.isPresent()) {
            Pet p1 = op1.get();
            p1.setCategory(category);
            p1.setName(name);
            p1.setGender(gender);
            p1.setStory(story);
            p1.setAge(age);
            p1.setWeight(weight);
            p1.setPostedAt(postedAt);
            return ResponseEntity.ok(petService.update(p1));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    
    @GetMapping("/all")			// use this to fretch and above method to edit										//----------------------> Fetch Show all					
    public ResponseEntity<List<Pet>> getAllPets() {
        List<Pet> pets = petService.getAll();
        if (pets.isEmpty()) {
            return ResponseEntity.noContent().build(); // Returns 204 if no pets are found
        }
        return ResponseEntity.ok(pets); // Returns 200 with the list of pets
    }
    
    @DeleteMapping("/{id}")												//-----------------------> Delete pet
    public ResponseEntity<Void> deletePet(@PathVariable Long id) {
        petService.deletePet(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    
    @GetMapping("/getPet/{email}")												//----------------------> User's Pet  Uploaded		
    public List <Pet> getAllPets(@PathVariable String email) {
    	UserLogin user=userService.findByEmail(email);
    	long id=user.getUserId();
    	List <Pet> pets= petService.getAllPet(id);
    	return pets;
    }
    @DeleteMapping("/delPet/{id}")											//----------------------->Del User Pet
    public void delPet(@PathVariable long id) {
    	 petService.deletePet(id);
    }
    
    @GetMapping("/all/Weight")
    public ResponseEntity<List<Pet>> getAllbyWeight() {
        List<Pet> pets = petService.getAll();
        if (pets.isEmpty()) {
            return ResponseEntity.noContent().build(); // Returns 204 if no pets are found
        }
        return ResponseEntity.ok(pets); // Returns 200 with the list of pets
    }
    

}
