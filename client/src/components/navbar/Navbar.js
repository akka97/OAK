
import { useState } from "react";
import { useAuthContext } from "../../Context/Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logooak from "../../images/logo oak.png";
import LoginForm from "../login/Login";
import RegisterForm from "../register/Register";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./Navbar.css";

function NavScrollExample() {
    const { logoutUser, authUser } = useAuthContext();

    const [status, setStatus] = useState(false);

    const openModal = () => {
        setStatus(true);
    }

    const handleLogout = async () => {
        const result = await logoutUser();
        console.log("result----", result);
        return;
    }

    const handleChange = (e) => {

    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src={logooak} alt="logo image" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {authUser.firstname ?
                                <>
                                    <Nav.Link> <AccountCircleIcon /> {authUser?.firstname}</Nav.Link>
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link onClick={openModal}>Register | </Nav.Link>
                                    <Nav.Link onClick={openModal}>Login</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <RegisterForm show={status} setShow={setStatus} />
            <LoginForm show={status} setShow={setStatus} />
        </>
    )
}

export default NavScrollExample;