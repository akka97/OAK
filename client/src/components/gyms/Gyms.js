import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./Gyms.css";

function ShapeExample(props) {

    return (
        <Container>
            <Row>
                {
                    props.gyms.map((el, index) => {
                        return (
                            <Col xs={12} sm={4} md={3} lg={3} key={el.id} className='gym-container'>
                                <Nav.Link href={`/gym/${el.id}`}>
                                    <Image src={el.src} className='image-styles' />
                                    <h5 className='gym-tittle'>{el.name}</h5>
                                </Nav.Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container >
    );
}

export default ShapeExample;
