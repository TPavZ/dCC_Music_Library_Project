import axios from "axios";
import React, { useState, useEffect } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SongForm from "./Components/SongForm/SongForm";
import EditSong from "./Components/EditSong/EditSong";

function App() {

  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setfilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setAllSongs(response.data);
    setfilteredSongs(response.data);

  }

  const filterSongs = (searchTerm) => {
    console.log(searchTerm);
    let matchingSongs = allSongs.filter((song) => {
      if (song.title.toLowerCase().includes(searchTerm.toLowerCase())
        + song.album.toLowerCase().includes(searchTerm.toLowerCase())
        + song.artist.toLowerCase().includes(searchTerm.toLowerCase())
        + song.genre.toLowerCase().includes(searchTerm.toLowerCase())
        + song.release_date.includes(searchTerm)) {
        return true
      }
      else return false
    });
    setfilteredSongs(matchingSongs)
  }

  return (
    <div>
      <NavBar />
      <SearchBar filterSongs={filterSongs} />
      <MusicTable songs={filteredSongs} />
      <SongForm />
    </div>
  );
}

export default App;
