package com.Project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Project.Entity.UserLogin;
import com.Project.Reposiory.UserRepository;
import com.Project.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin
@RequestMapping("/User")
public class UserController {
	
    @Autowired
    private UserService userService;
    
    @Autowired
	private UserRepository userRepository;

    @PostMapping("/login")										//-----------------------------------> existing User
    public String loginUser(@RequestParam String email, @RequestParam String password) {
        try {
            UserLogin user = userService.login(email, password);
            return user.getEmail();
        } catch (IllegalArgumentException e) {
            return "Login failed: " + e.getMessage();
        }
    }

    @PostMapping("/register")									//-----------------------------------> new user
    public UserLogin registerUser(@RequestParam String email, @RequestParam String password) {
        UserLogin newUser = new UserLogin(email, password);
        return userService.save(newUser);
    }
    
    @GetMapping("/search/{email}")								//-----------------------------------> search by Email
    public UserLogin getUserEmail(@PathVariable String email) {
        return userService.findByEmail(email);
    }
    
    @GetMapping("/all")											//----------------------------------> All user				
    public List<UserLogin> getUsers(){
		return userService.getAll();
    }
    @PutMapping("/update")
    public String putMethodName(@RequestParam String name,@RequestParam String email,@RequestParam Long Phno,@RequestParam String imgUrl) {
        
    	
    	UserLogin user=userService.findByEmail(email);
    	user.setName(name);
    	user.setPhno(Phno);
    	user.setImgUrl(imgUrl);
    	userRepository.save(user);
        return "Info Updated";
    }
    
    @GetMapping("/getAll")
    public List<UserLogin> getAlluser(){
    	return userService.FindAlluser();
    }
    
}
