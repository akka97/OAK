import Sidenav from "../Sidenav/Sidenav";
import GymModal from "./GymModal/GymModal";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import GymDataTable from "./GymDataTable/GymDataTable";
import "./Gyms.css";
import { useState } from "react";

const Gyms = () => {

    const [open, setOpen] = useState(false);

    const createGym = () => {
        setOpen(true);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Toolbar />
                <Container>
                    <Row>
                        <div className="gyms-container">
                            <Col xs={12} sm={4} md={3} lg={3}>
                                <Button variant="contained" onClick={createGym}>Create Gym  <AddIcon /> </Button>
                                <GymModal open={open} setOpen={setOpen} />
                            </Col>

                            <Col xs={12} sm={12} md={12} ls={12} className="gym-data-table-cont">
                                <GymDataTable />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </Box >
        </>
    )
}
export default Gyms;