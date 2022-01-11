import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container, Form, FormControl } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";

//The dCC Music Library
const NavBar = (props) => {

    return (

        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <SearchBar />
                    {/* A1 */}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default NavBar;