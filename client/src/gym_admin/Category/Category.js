import Sidenav from "../Sidenav/Sidenav";
import CategoryModal from "./CategoryModal/CategoryModal";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import CategoryDataTable from "./CategoryDatatable/CategoryDatatable";
import "./Category.css";
import { useState } from "react";

const Category = () => {
    const [open, setOpen] = useState(false);
    const createCategory = () => {
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
                                <Button variant="contained" onClick={createCategory}>Create Category  <AddIcon /> </Button>
                                <CategoryModal open={open} setOpen={setOpen} />
                            </Col>

                            <Col xs={12} sm={12} md={12} ls={12} className="areas-data-table-cont">
                                <CategoryDataTable />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </Box >
        </>
    )
}
export default Category;