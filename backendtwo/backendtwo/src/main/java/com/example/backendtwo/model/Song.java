package com.example.backendtwo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "songs")
public class Song {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String singer;
    private String songType;

    @Lob
    private byte[] audioFile;

    @Lob
    private byte[] coverImage;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    @JsonBackReference

    private Movie movie;

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSinger() { return singer; }
    public void setSinger(String singer) { this.singer = singer; }

    public String getSongType() { return songType; }
    public void setSongType(String songType) { this.songType = songType; }

    public byte[] getAudioFile() { return audioFile; }
    public void setAudioFile(byte[] audioFile) { this.audioFile = audioFile; }

    public byte[] getCoverImage() { return coverImage; }
    public void setCoverImage(byte[] coverImage) { this.coverImage = coverImage;}
    public Movie getMovie() { return movie; }
    public void setMovie(Movie movie) { this.movie = movie;}
}
