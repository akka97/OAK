import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";
import gymCarousel from "../../db/gymCarousel";


const GymRatingCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
            <Container>
                <Row>
                    {
                        gymCarousel.map((gym, index) => {
                            return (
                                <Col xs={12} sm={4} md={3} lg={3} key={gym.id} className='gym-container'>
                                   
                                            <h3>{gym.name}</h3>
                                            <p>{gym.description}</p>
                                            <img style={{ width: "250px" }} src={gym.src} alt={gym.name} />
                                        
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Carousel >
    );
}
export default GymRatingCarousel;