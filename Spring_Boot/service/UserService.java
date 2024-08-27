package com.Project.service;

import java.util.List;

import com.Project.Entity.UserLogin;

public interface UserService {
	UserLogin findByEmail(String email);
    UserLogin save(UserLogin user);
    UserLogin login(String email, String password);
	List<UserLogin> getAll();
	UserLogin findById(Long userId);
	List<UserLogin> FindAlluser();
}
