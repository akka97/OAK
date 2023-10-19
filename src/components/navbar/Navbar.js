import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import MyModal from "../reusable-components/modal";
import logooak from "../../images/logo oak.png";

const NavScrollExample = () => {

    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logooak} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 custom_menu"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={(e) => showModal()}>
                                Register
                            </Nav.Link>
                            <NavDropdown title="All Fitness" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Palestra</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Spa
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Box
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action6">
                                    Crossfit
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Do behet ajo e gjuhe ktu"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Language</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <MyModal show={show} setShow={setShow} />


        </>
    )
}

export default NavScrollExample;