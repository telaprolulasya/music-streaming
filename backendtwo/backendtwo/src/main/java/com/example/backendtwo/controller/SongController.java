package com.example.backendtwo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backendtwo.model.Song;

import com.example.backendtwo.service.SongService;


@RestController
@RequestMapping("/api/songs")
@CrossOrigin(origins = "http://localhost:5173")
public class SongController {
	@Autowired 
	private SongService songService; 
	@PostMapping("/upload")
	public ResponseEntity<Song> uploadSong
	( @RequestParam("title") String title, @RequestParam("singer") String singer, @RequestParam("songType") String songType, @RequestParam("audioFile") MultipartFile audioFile, @RequestParam("coverImage") MultipartFile coverImage) throws IOException { Song s = new Song();
	s.setTitle(title);
	s.setSinger(singer);
	s.setSongType(songType);
	s.setAudioFile(audioFile.getBytes()); 
	s.setCoverImage(coverImage.getBytes());
	return ResponseEntity.ok(songService.save(s));
	} 
	@GetMapping 
	public List<Song> getAllSongs()
	{ return songService.getAll(); } }
