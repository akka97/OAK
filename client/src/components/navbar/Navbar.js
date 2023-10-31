import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logooak from "../../images/logo oak.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LoginForm from "../login/Login";
import RegisterForm from "../register/Register";
import "./Navbar.css";

const NavScrollExample = () => {

    const [show, setShow] = useState(false);
    const openRegisterModal = () => setShow(true);
    const [status, setStatus] = useState(false);
    const openLoginModal = () => setStatus(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 custom_menu nav "
                            navbarScroll
                        >
                            <Navbar.Brand>
                                <img src={logooak} alt="image" />
                            </Navbar.Brand>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={(e) => openRegisterModal()}>
                                Register
                            </Nav.Link>
                            <Nav.Link onClick={(e) => openLoginModal()}>
                                Login
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <DropdownButton className='btn-primary' id="dropdown-item-button" title={
                                <span>Languages<i class="bi bi-globe-americas lng-icon"></i></span>
                            }>
                                <Dropdown.Item as="button">English</Dropdown.Item>
                                <Dropdown.Item as="button">Albanian</Dropdown.Item>
                            </DropdownButton>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <RegisterForm show={show} setShow={setShow} />
            <LoginForm show={status} setShow={setStatus} />
        </>
    )
}

export default NavScrollExample;