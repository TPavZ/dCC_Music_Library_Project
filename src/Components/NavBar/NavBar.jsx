import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import "./NavBar.css"

const NavBar = (props) => {

    return (

        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>Tyler's dCC Music Library</Navbar.Brand>
            </Container>
        </Navbar>

    );

}

export default NavBar;
