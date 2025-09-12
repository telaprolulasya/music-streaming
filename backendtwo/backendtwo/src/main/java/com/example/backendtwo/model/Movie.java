package com.example.backendtwo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String name;

	    @Lob
	    private byte[] coverImage;
	    

	    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	    @JsonManagedReference

	    private List<Song> songs;  // optional if you want to fetch songs with movie

	    public Long getId() { return id; }
	    public void setId(Long id) { this.id = id; }

	    public String getName() { return name; }
	    public void setName(String name) { this.name = name; }

	    public byte[] getCoverImage() { return coverImage; }
	    public void setCoverImage(byte[] coverImage) { this.coverImage = coverImage; }

	    public List<Song> getSongs() { return songs; }
	    public void setSongs(List<Song> songs) { this.songs = songs; }
	}
