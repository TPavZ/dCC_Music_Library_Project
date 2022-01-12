import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import BarTesting from "./Components/SearchBar/BarTesting";
import ViewAllSongs from "./Components/ViewAllSongs/ViewAllSongs";


function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setfilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
    setSongs(response.data)
  }

  function filterSongs(input) {
    let song = songs.filter(song => {
      if (song.title.includes(input)) { return true };
      if (song.album.includes(input)) { return true };
      if (song.artist.includes(input)) { return true };
      if (song.genre.includes(input)) { return true };
      if (song.releaseDate.includes(input)) { return true };
    });
    setfilteredSongs(song);
  }

  return (
    <div>
      <NavBar />
      {/* <ViewAllSongs filteredSongs={filteredSongs} /> */}
      {/* <SearchBar /> */}
      <MusicTable songs={songs} />
      <BarTesting filterSongs={filterSongs} />
    </div>

  );
}

export default App;
