package com.example.backendtwo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendtwo.model.Song;
import java.util.*;
public interface SongRepository extends JpaRepository<Song, Long>{
	List<Song> findByMovieId(Long movieId);

}
