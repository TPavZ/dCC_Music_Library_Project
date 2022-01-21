import { useState } from 'react'
import { Button } from 'react-bootstrap'

const EditSong = (props) => {
    const [state, setState] = useState({ title: props.editedSong.title, album: props.editedSong.album, artist: props.editedSong.artist, genre: props.editedSong.genre, release_date: props.editedSong.release_date });

    const handleChange = e => {
        const { name, value } = e.target;
        setState(lastState => ({
            ...lastState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.editSong(props.editedSong.id, state);
        props.setShowForm(false);
    }

    return (
        <form onSubmit={handleSubmit} className="edit-song">
            <label><strong>Edit Song:</strong> Song Title</label>
            <input name="title" onChange={handleChange} value={state.title}></input>
            <label>Song Album:</label>
            <input name="album" onChange={handleChange} value={state.album}></input>
            <label>Song Artist:</label>
            <input name="artist" onChange={handleChange} value={state.artist}></input>
            <label>Song Genre:</label>
            <input name="genre" onChange={handleChange} value={state.genre}></input>
            <label>Song Release Date:</label>
            <input type="date" name="release_date" onChange={handleChange} value={state.release_date}></input>
            <Button type="submit" variant="outline-dark" >Submit</Button>
        </form>
    );
}

export default EditSong;