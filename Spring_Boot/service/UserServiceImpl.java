package com.Project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.Entity.Pet;
import com.Project.Entity.UserLogin;
import com.Project.Reposiory.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserLogin findByEmail(String email) {
			
		return userRepository.findByEmail(email);
	}

	@Override
	public UserLogin save(UserLogin user) {
		
		return userRepository.save(user);
	}

	@Override
	public UserLogin login(String email, String password) {
		 UserLogin user = userRepository.findByEmail(email);
	        if (user == null) {
	            // Optionally, you could create the user if they don't exist.
	            user = new UserLogin(email, password);
	            userRepository.save(user);
	        } else {
	            // Check the password (you should hash passwords and not store them in plain text)
	            if (!user.getPassword().equals(password)) {
	                throw new IllegalArgumentException("Invalid credentials");
	            }
	        }
		return user ;
	}

	@Override
    public List<UserLogin> getAll() {
        return userRepository.findAll();
    }

	@Override
	public UserLogin findById(Long userId) {
		
		return userRepository.findById(userId).get();
	}
	
	@Override
	public List<UserLogin> FindAlluser(){
		List<UserLogin> users =userRepository.findAll();
		return users;
	}
	
}
