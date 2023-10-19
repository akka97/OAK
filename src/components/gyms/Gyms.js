import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import db_data from "../../db/gyms";
import "./Gyms.css";

function ShapeExample() {
    return (
        <Container>
            <Row>
                {
                    db_data.map((el, index) => {
                        return (
                            <Col xs={6} md={3} className='gym-container'>
                                <Image src={el.src} className='image-styles' />
                                <h5 className='gym-tittle'>{el.name}</h5>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default ShapeExample;