package com.example.backendtwo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendtwo.model.Admin;



public interface AdminRepository  extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
}
