import Card from 'react-bootstrap/Card';
import GymRatingCarousel from "../carousel/Carousel";
import alfa from "../../images/alfa.jpeg";
import repeat from "../../images/REPEAT.png";
import limit from '../../images/limitless.jpeg';
import nobis2 from '../../images/nobis2.png';
import './gymRate.css';

function CardExample() {
    return (
        <>
            <div className="d-flex justify-content-around">
                <Card className='card' style={{ width: '17rem' }}>
                    <Card.Img className='image-styles' variant="top" src={alfa} />
                    <Card.Body className='CardBody'>
                        <Card.Title>Alpha Crossfit</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '17rem' }}>
                    <Card.Img className='image-styles' variant="top" src={repeat} />
                    <Card.Body className='CardBody'>
                        <Card.Title>Repeat Wellness Center</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '17rem' }}>
                    <Card.Img className='image-styles' variant="top" src={limit} />
                    <Card.Body className='CardBody'>
                        <Card.Title>Limitless Gym</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '17rem' }}>
                    <Card.Img className='image-styles' variant="top" src={nobis2} />
                    <Card.Body className='CardBody'>
                        <Card.Title>Nobis Wellness</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default CardExample;