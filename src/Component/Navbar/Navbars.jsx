import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import './Nav.css'
import logonav from "../../assets/Vitality Care.png"
const Navbars = () => {
  return (

  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand >  <img src={logonav} title="logo" className="logo-nav" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="active">Home</Nav.Link>
        <NavDropdown title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Our Team</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">FAQ'S</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Booking</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Error404</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Login/Register</NavDropdown.Item>
        </NavDropdown>


        <NavDropdown title="Service" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action3">Service</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Service Detiles</NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Blog" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Blog Detiles</NavDropdown.Item>
              </NavDropdown>





        <Nav.Link href="#" disabled>
              Contast Us
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Search
            </Nav.Link>
            <Nav.Link href="#" disabled>
             icon + (01125046782)
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <button>Contast Us <span> > </span></button>
            </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars
