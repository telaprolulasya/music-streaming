package com.example.backendtwo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backendtwo.model.Admin;
import com.example.backendtwo.model.User;
import com.example.backendtwo.repository.AdminRepository;
import com.example.backendtwo.repository.UserRepository;
@Service
public class AuthService {
	@Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    // User signup/login
    public User registerUser(User user) { return userRepository.save(user); }
    public Optional<User> loginUser(String email, String password) {
        Optional<User> u = userRepository.findByEmail(email);
        if(u.isPresent() && u.get().getPassword().equals(password)) return u;
        return Optional.empty();
    }

    // Admin signup/login
    public Admin registerAdmin(Admin admin) { return adminRepository.save(admin); }
    public Optional<Admin> loginAdmin(String email, String password) {
        Optional<Admin> a = adminRepository.findByEmail(email);
        if(a.isPresent() && a.get().getPassword().equals(password)) return a;
        return Optional.empty();
    }





}
