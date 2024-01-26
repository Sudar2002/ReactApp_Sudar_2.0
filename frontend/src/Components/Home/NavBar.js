import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
 
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-info bg-gradient border border-warning rounded mt-1" >
      <Container fluid>
      <Link to='/' className='text-decoration-none'><Navbar.Brand className=' fw-bold fs-4' href="#" style={{color:'darkmagenta'}}><i class="bi bi-emoji-heart-eyes text-primary"></i> SDR</Navbar.Brand></Link>  
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
           <Link to='/' className='text-decoration-none'> <Nav.Link href="#action1" className='mx-4 fw-bold '>Home</Nav.Link></Link>

            <NavDropdown className='mx-4  fw-bold ' title="Our links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <Link to='/admin' className='text-decoration-none'>
              <NavDropdown.Item href="#action4">
                Admin Panel
              </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/sign_up" className='mx-4 mt-2 fw-bold text-decoration-none text-dark'>Sing up</Link>
            <Link to="/log_in" className='mx-4 mt-2  fw-bold text-decoration-none text-dark'>Log in</Link>
           
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

