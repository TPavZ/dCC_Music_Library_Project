import axios from "axios";
import React, { useState, useEffect } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SongForm from "./Components/SongForm/SongForm";
/* import EditSong from "./Components/EditSong/EditSong"; */

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

  async function deleteSong(id) {
    let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    getAllSongs();
  }

  async function editSong(id, updatedSong) {
    let response = await axios.put(`http://127.0.0.1:8000/music/${id}/`, updatedSong);
    getAllSongs();
  }

  return (
    <div>
      <NavBar />
      <SearchBar filterSongs={filterSongs} />
      <MusicTable songs={filteredSongs} deleteSong={deleteSong} editSong={editSong} />
      <SongForm getAllSongs={getAllSongs} />
    </div>
  );
}

export default App;
