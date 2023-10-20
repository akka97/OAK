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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MyModal1 from "../login/Login";


const NavScrollExample = () => {

    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const showModal1 = () => setShow1(true);

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
                            <Nav.Link onClick={(e) => showModal1()}>
                                Login
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
                            <DropdownButton className='btn-primary' id="dropdown-item-button" title="Choose your language">
                                <Dropdown.Item as="button">English</Dropdown.Item>
                                <Dropdown.Item as="button">Albania</Dropdown.Item>
                            </DropdownButton>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <MyModal show={show} setShow={setShow} />
            <MyModal1 show={show1} setShow={setShow1} />


        </>
    )
}

export default NavScrollExample;