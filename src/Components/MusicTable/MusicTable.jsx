import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditSong from "../EditSong/EditSong";

const MusicTable = (props) => {
    console.log(props.filteredSongs);


    const [showForm, setShowForm] = useState(false);
    const [editedSong, setEditedSong] = useState("")

    console.log(showForm);

    function toggleEdit(song) {
        setEditedSong(song);
        setShowForm(true);
    }

    return (
        <>
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <td><Button type="submit" variant="outline-dark" onClick={() => toggleEdit(song)}>Edit</Button><Button type="submit" variant="outline-dark" onClick={() => props.deleteSong(song.id)}>Delete</Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {showForm && <EditSong editedSong={editedSong} editSong={props.editSong} setShowForm={setShowForm}/>}
        </>
    );
}

export default MusicTable;




