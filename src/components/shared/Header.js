import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" className="container">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={"/logo.png"} height={100} width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="shadow p-2 rounded">
          <button className="fw-bold book-now">Request Quetos</button>
          <Nav className="me-auto ms-auto my-2 my-lg-0 navbar-list">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/services/PhotoEditing">Photo Editing</NavDropdown.Item>
              <NavDropdown.Item href="/services/VideoEditing">Video Editing</NavDropdown.Item>
              <NavDropdown.Item href="/services/AlbumEditing">
                Album Designing(FLIP BOOK)
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio/Portfolio">Potfolio</Nav.Link>
            <Nav.Link href="/aboutUs/AboutUs">About Us</Nav.Link>
          </Nav>
          <div className="d-flex gap-4 my-3">
            <Link href={'/authentication/Login'}>
              <button className="explore-now fw-bold">Login</button>
            </Link>
            <Link href={'/authentication/Register'}>
              <button className="explore-now fw-bold">Register</button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
