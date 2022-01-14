import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import BarTesting from "./Components/SearchBar/BarTesting";
import ViewAllSongs from "./Components/ViewAllSongs/ViewAllSongs";
import SongForm from "./Components/SongForm/SongForm";


function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setfilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() { 
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data)
  }

  function filterSongs(input) {
    let song = songs.filter(element => {
      if (element.title.includes(input)) { return true };
      if (element.album.includes(input)) { return true };
      if (element.artist.includes(input)) { return true };
      if (element.genre.includes(input)) { return true };
      if (song.release_date.includes(input)) { return true };
    });
    setfilteredSongs(song);
  }

  if (songs !== [])
    return (
      <div>
        <NavBar />
        {/* <ViewAllSongs filteredSongs={filteredSongs}/> */}
        {/* <SearchBar /> */}
        <MusicTable songs={songs} />
        <SongForm />
        <BarTesting filterSongs={filterSongs} />
      </div>

    );
}

export default App;
