package com.Project.Reposiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.Entity.UserLogin;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Long> {
	 UserLogin findByEmail(String email);
}
