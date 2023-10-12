import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import db_data from "../../db/gyms";



function ShapeExample() {
    return (
        <Container>
            <Row>
                {
                    db_data.map((el, index) => {
                        return (
                            <Col xs={6} md={4}>
                                <h5>{el.name}</h5>
                                <Image src={el.src} thumbnail />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default ShapeExample;