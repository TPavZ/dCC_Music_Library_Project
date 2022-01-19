import { Table, Button } from "react-bootstrap";

const MusicTable = (props) => {
    console.log(props.filteredSongs);


    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    {/* <th>ID</th> */}
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
                            {/* <td>{song.id}</td> */}
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td><Button type="submit" variant="outline-dark">Edit</Button><Button type="submit" variant="outline-dark" onClick={() => props.deleteSong(song.id)}>Delete</Button></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default MusicTable;




