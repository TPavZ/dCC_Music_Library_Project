import { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const SongForm = (props) => {
    const [state, setState] = useState({ title: "", album: "", artist: "", genre: "", release_date: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setState(lastState => ({
            ...lastState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/music/', state)
        props.getAllSongs()
    }

    return (
        <form onSubmit={handleSubmit} className="song-form">
            <label><strong>Add A Song:</strong> Song Title</label>
            <input name="title" onChange={handleChange} value={state.title}></input>
            <label>Song Album:</label>
            <input name="album" onChange={handleChange} value={state.album}></input>
            <label>Song Artist:</label>
            <input name="artist" onChange={handleChange} value={state.artist}></input>
            <label>Song Genre:</label>
            <input name="genre" onChange={handleChange} value={state.genre}></input>
            <label>Song Release Date:</label>
            <input type="date" name="release_date" onChange={handleChange} value={state.release_date}></input>
            <Button type="submit" variant="outline-dark" /* onClick={refreshPage} */>Submit</Button>
        </form>
    );
}

export default SongForm;