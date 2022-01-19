import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import "./NavBar.css"
/* import SearchBar from "../SearchBar/SearchBar"; */
import SongForm from "../SongForm/SongForm";

//The dCC Music Library
const NavBar = (props) => {

    return (

        <Navbar /* float="top" */ bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>Tyler's dCC Music Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <SongForm />
                    {/* <SearchBar /> */}
                    {/* A1 */}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default NavBar;


/* A1
 <Form className="d-flex">
                        <FormControl 
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form> */