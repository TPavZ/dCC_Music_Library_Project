import { useState } from "react"
import { Button } from "react-bootstrap";
import "./BarTesting.css"

const BarTesting = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        props.filterSongs(searchTerm);      
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <label>Search Song Library</label>
            <input type="search" placeholder="Search here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" variant="outline-dark">Search</Button>
        </form>
    );
}
export default BarTesting;