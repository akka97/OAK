import Sidenav from "../Sidenav/Sidenav";
import UserModal from "./UserModal/UserModal";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import UsersDataTable from "./UserDatatable/UserDatatable";
import "./Users.css";
import { useState } from "react";

const Users = () => {
    const [open, setOpen] = useState(false);
    const createUser = () => {
        setOpen(true);
    }

    // console.log("users------");

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Toolbar />
                <Container>
                    <Row>
                        <div className="users-container">
                            <Col xs={12} sm={4} md={3} lg={3}>
                                <Button variant="contained" onClick={createUser}>Create User  <AddIcon /> </Button>
                                <UserModal open={open} setOpen={setOpen} />
                            </Col>

                            <Col xs={12} sm={12} md={12} ls={12} className="users-data-table-cont">
                                <UsersDataTable />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </Box >
        </>
    )
}
export default Users;