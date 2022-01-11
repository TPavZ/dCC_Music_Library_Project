import { Table } from "react-bootstrap";

const MusicTable = (props) => {
    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <th>ID</th>
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
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.releaseDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default MusicTable;