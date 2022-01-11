import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
    setSongs(response.data)
  }

  return (
    <div>
      <NavBar />
      {/* <SearchBar /> */}
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;
