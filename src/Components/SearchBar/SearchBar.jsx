import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./SearchBar.css"


const SearchBar = (props) => {
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let song = props.songs.filter(song => {
            if (song.title === title) { return true };
            if (song.album === album) { return true };
            if (song.artist === artist) { return true };
            if (song.genre === genre) { return true };
            if (song.release_date === releaseDate) { return true };
        });
        props.songSearch(song);
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div>
                <label>Song Title</label>
                <input value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <label>Song Album</label>
                <input value={album} onChange={(event) => setAlbum(event.target.value)}></input>
                <label>Song Artist</label>
                <input value={artist} onChange={(event) => setArtist(event.target.value)}></input>
                <label>Song Genre</label>
                <input value={genre} onChange={(event) => setGenre(event.target.value)}></input>
                <label>Song Release Date</label>
                <input type="date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>
                <Button type="submit" variant="outline-light">Search</Button>
            </div>

        </form>
    );
}

export default SearchBar;
