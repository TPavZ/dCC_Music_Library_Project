import { useState } from "react"
import { Button } from "react-bootstrap";
import "./BarTesting.css"

const BarTesting = (props) => {
    const [input, setInput] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        props.filterSongs(input);        
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <label>Search Library</label>
            <input type="search" value={input} onChange={(event) => setInput(event.target.value)} />
            <Button type="submit" variant="outline-dark">Search</Button>
        </form>
    );
}
export default BarTesting;