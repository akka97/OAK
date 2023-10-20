import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import db_rate from "../../db/gymsRate";
import './gymRate.css';
import alfa from "../../images/alfa.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


//
//function RateExample() {
//    return (
//        <Container>
//            <Row>
//                {
//                    db_rate.map((el, index) => {
//                        return (
//                            <Col xs={6} md={4}>
//                                <h5>{el.name}</h5>
//                                <Image src={el.src} thumbnail />
//                            </Col>
//                        )
//                    })
//                }
//            </Row>
//        </Container>
//    );
//}
//
//export default RateExample;

function CardExample() {
    return (
        <div className="d-flex justify-content-around">
            <Card className='card' style={{ width: '17rem' }}>
                <Card.Img variant="top" src={alfa} />
                <Card.Body className='CardBody'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className='card' style={{ width: '17rem' }}>
                <Card.Img variant="top" src={alfa} />
                <Card.Body className='CardBody'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className='card' style={{ width: '17rem' }}>
                <Card.Img variant="top" src={alfa} />
                <Card.Body className='CardBody'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className='card' style={{ width: '17rem' }}>
                <Card.Img variant="top" src={alfa} />
                <Card.Body className='CardBody'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
    )
}
export default CardExample;