import axios from "axios";
import React, { useState, useEffect } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";

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
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;
