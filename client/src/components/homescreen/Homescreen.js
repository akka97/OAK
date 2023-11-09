import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import videoSrc from '../videos/gym.mp4';
import FilterCity from '../filtercity/Filtercity';
import FilterSearch from "../filterSearch/filterSearch";
import FilterCategory from "../filtercategory/FilterCategory";

import ShapeExample from '../gyms/Gyms';
import RateExample from '../gymrate/gymRate';
import Footer from '../footer/Footer';
import NavScrollExample from '../navbar/Navbar';
import LowerBody from "../lowerbody/Lowerbody";
import "./Homescreen.css";
import '../filtercity/Filtercity.css';
import db_data from "../../db/gyms";
function Homescreen() {

    const [gyms, setGyms] = useState(db_data);

    // useEffect(() => {
    //     const result = db_data;
    // }, [])


    return (
        <>
            <div>
                <NavScrollExample />
            </div>
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
                <Container>
                    <Row>

                        <Col xs={12} sm={12} md={4} lg={6} className='filter-search'>
                            <FilterSearch setGyms={setGyms} />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} className='filter-citty'>
                            <FilterCity />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} className='filter-category'>
                            <FilterCategory />
                        </Col>

                    </Row>
                </Container>
            </div>
            <div>
                <ShapeExample db_data={gyms} />
            </div>
            <div>
                <div className='element'>
                    <RateExample />
                </div>
            </div>
            <div>
                <LowerBody />
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}
export default Homescreen;
