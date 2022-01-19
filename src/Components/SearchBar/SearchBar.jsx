import { useState } from "react"
import { Button } from "react-bootstrap";
import "./SearchBar.css"

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        props.filterSongs(searchTerm);
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="search" placeholder="Search Song Library..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" variant="outline-dark">Search</Button>
        </form>
    );
}
export default SearchBar;