import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./GymCard.css";
import db_data from "../../db/gyms";
import NavScroll from "../navbar/Navbar";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import "./GymCard.css";

const GymCard = () => {

    const params = useParams();
    const [gym, setGym] = useState([]);

    useEffect(() => {

        console.log("gym---2");
        const result = db_data.find((el, index) => {
            if (el.id == params.id)
                return el;
        });
        setGym(result);
    }, []);

    console.log("gym---1", gym);

    return (
        <>
            <NavScroll />
            <Container>
                <Row>
                    <Col xs={11} sm={11} md={11} lg={11} key={gym.id} className='single-container'>
                        <Image src={gym.src} className='single-gym-img' />
                        <h5>Gym Name {params.id}</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GymCard;