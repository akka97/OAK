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
import Footer from "../footer/Footer"
import { BorderAll, } from '@mui/icons-material';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';

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
                        <Image src={gym.secsrc} className='single-gym-img' />
                        <h5 className='gym-name'>{gym.name}</h5>
                        <h5 className='desc-font'>Description: {gym.description}</h5>
                        <div className='facility-container'>
                            <h2 className='facilities-icon'>Facilites</h2>
                            <ul className='facility-list'>
                                <li><ShowerOutlinedIcon />
                                    <span>
                                        Shower
                                    </span>
                                </li>
                                <li> <CheckroomOutlinedIcon />
                                    <span>
                                        Dressing Room
                                    </span>
                                </li>
                                <li><LockOutlinedIcon />
                                    <span>
                                        Cabinet
                                    </span>
                                </li>
                                <li><LocalParkingOutlinedIcon />
                                <span>
                                    Parking
                                </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default GymCard;