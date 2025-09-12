package com.example.backendtwo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backendtwo.model.Movie;
import com.example.backendtwo.model.Song;
import com.example.backendtwo.service.MovieService;
import com.example.backendtwo.service.SongService;
@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "http://localhost:5173")
public class MovieController {
	
	    @Autowired
	    private  MovieService movieService;

	    @Autowired
	    private SongService songService;
	    public MovieController(MovieService movieService) {
	        this.movieService = movieService;
	    }

	    @PostMapping("/add")
	    public ResponseEntity<Movie> addMovie(
	            @RequestParam("name") String name,
	            @RequestParam("coverImage") MultipartFile coverImage) throws IOException {
	        Movie m = new Movie();
	        m.setName(name);
	        m.setCoverImage(coverImage.getBytes());
	        return ResponseEntity.ok(movieService.save(m));
	    }
	    @GetMapping("/{movieId}/songs")
	    public List<Song> getSongsByMovie(@PathVariable Long movieId) {
	        return songService.getAllByMovieId(movieId);
	    }


	    // list all movies
	    @GetMapping
	    public List<Movie> getAllMovies() {
	        return movieService.getAll();
	    }

	    // add song under a movie id
	    @PostMapping("/{movieId}/songs/add")
	    public ResponseEntity<Song> addSongToMovie(
	            @PathVariable Long movieId,
	            @RequestParam("title") String title,
	            @RequestParam("singer") String singer,
	            @RequestParam("songType") String songType,
	            @RequestParam("audioFile") MultipartFile audioFile,
	            @RequestParam("coverImage") MultipartFile coverImage) throws IOException {

	        Movie movie = new Movie();
	        movie.setId(movieId); // just set id to link
	        Song s = new Song();
	        s.setTitle(title);
	        s.setSinger(singer);
	        s.setSongType(songType);
	        s.setAudioFile(audioFile.getBytes());
	        s.setCoverImage(coverImage.getBytes());
	        s.setMovie(movie);

	        return ResponseEntity.ok(songService.save(s));
	    }
	}