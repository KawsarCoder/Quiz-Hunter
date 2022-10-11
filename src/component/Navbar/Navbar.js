import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <img
            className="site-logo"
            src="https://cdn-icons-png.flaticon.com/512/3874/3874176.png"
            alt=""
          />{" "}
          Quiz Hunter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to={"home"} className="route-item">
              Home
            </Link>
            <Link to={"graph"} className="route-item">
              Graph
            </Link>
            <Link to={"blog"} className="route-item">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// eventKey={2}
export default CollapsibleExample;
