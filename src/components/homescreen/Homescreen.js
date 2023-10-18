import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Box from "@mui/material/Box";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Homescreen.css";
import videoSrc from '../videos/gym.mp4';
import DropdownItemTagsExample from '../filtercity/Filtercity';
import '../filtercity/Filtercity.css';
import ShapeExample from '../gyms/Gyms';
import RateExample from '../gymrate/gymRate';
import Footer from '../footer/Footer';


function NavScrollExample() {
    return (
        <>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">LOGOOOOOOO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 custom_menu"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link to="/LogInForm">Register</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
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
        
        <Box className="mainContainer" component="main" sx={{ p: 0 }}></Box>
        <div className="videoContainer">
                <video width="100%" className="video" autoPlay muted loop>
                    <source
                        src={videoSrc}
                        type="video/mp4"
                    />
                </video>
                </div>
        <div className='center-dropdown'>
            <DropdownItemTagsExample />
        </div>
        <div>
            <ShapeExample />
        </div>

        <div>
        <p> Hapsir bosh              bosh</p>
        </div>

        <div>
                <div className='element'>
            <RateExample />
                </div>
        </div>
         
         <div>
            <Footer />
         </div>

        </>

    );

}

export default NavScrollExample;