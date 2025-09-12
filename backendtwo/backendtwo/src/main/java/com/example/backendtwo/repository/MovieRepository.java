package com.example.backendtwo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendtwo.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
