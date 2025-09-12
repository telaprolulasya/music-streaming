package com.example.backendtwo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backendtwo.model.Song;
import com.example.backendtwo.repository.SongRepository;
@Service
public class SongService {
	@Autowired
    private SongRepository songRepository;

    public Song save(Song song) {
        return songRepository.save(song);
    }

    public List<Song> getAll() {
        return songRepository.findAll();
    }
    public List<Song> getAllByMovieId(Long movieId) {
        return songRepository.findByMovieId(movieId);
    }

}