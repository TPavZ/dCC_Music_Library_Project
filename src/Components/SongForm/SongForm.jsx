import { useState, prevState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const SongForm = (props) => {
    const [state, setState] = useState({ title: "", album: "", artist: "", genre: "", release_date: "" });

    const handleChange = element => {
        const { name, value } = element.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/music/', state)
        props.newSong()
    }

    return (
        <form onSubmit={handleSubmit} className="song-form">
            <div>
                <h4>Add A Song</h4>
                <label>Song Title</label>
                <input name="title" onChange={handleChange} ></input>
                <label>Song Album</label>
                <input name="album" onChange={handleChange} ></input>
                <label>Song Artist</label>
                <input name="artist" onChange={handleChange} ></input>
                <label>Song Genre</label>
                <input name="genre" onChange={handleChange} ></input>
                <label>Song Release Date</label>
                <input type="date" name="release_date" onChange={handleChange} ></input>
                <Button type="submit" variant="outline-light">Submit</Button>
            </div>

        </form>
    );
}

export default SongForm;