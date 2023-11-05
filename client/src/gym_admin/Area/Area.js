import Sidenav from "../Sidenav/Sidenav";
import AreaModal from "./AreaModal/AreaModal";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import AreasDataTable from "./AreasDatatable/AreaDatatable";
import "./Area.css";
import { useState } from "react";

const Areas = () => {
    const [open, setOpen] = useState(false);
    const createArea = () => {
        setOpen(true);
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Toolbar />
                <Container>
                    <Row>
                        <div className="areas-container">
                            <Col xs={12} sm={4} md={3} lg={3}>
                                <Button variant="contained" onClick={createArea}>Create Area  <AddIcon /> </Button>
                                <AreaModal open={open} setOpen={setOpen} />
                            </Col>

                            <Col xs={12} sm={12} md={12} ls={12} className="areas-data-table-cont">
                                <AreasDataTable />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </Box >
        </>
    )
}
export default Areas;