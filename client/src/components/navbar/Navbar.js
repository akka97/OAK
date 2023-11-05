import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logooak from "../../images/logo oak.png";
import LoginForm from "../login/Login";
import RegisterForm from "../register/Register";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css";

function NavScrollExample () {
    const handleChange = (e) => {

    }

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
                            className="me-auto my-2 my-lg-0 custom_menu nav navbar-elem"
                            navbarScroll
                        >
                            <Navbar.Brand>
                                <img src={logooak} alt="logo image" />
                            </Navbar.Brand>
                            <Nav.Link className="home-elem" href="/">Home</Nav.Link>
                            <Nav.Link className="register-elem" onClick={(e) => openRegisterModal()}>
                                Register
                            </Nav.Link>
                            <Nav.Link className="login-elem" onClick={(e) => openLoginModal()}>
                                Login
                            </Nav.Link>
                        </Nav>
                        <FormControl fullWidth className="language-bar">
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={20}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Shqip</MenuItem>
                            </Select>
                        </FormControl>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <RegisterForm show={show} setShow={setShow} />
            <LoginForm show={status} setShow={setStatus} />
        </>
    )
}

export default NavScrollExample;