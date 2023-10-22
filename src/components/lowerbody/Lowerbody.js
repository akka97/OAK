import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Lowerbody.css'

const LowerBody = () => {
    return (
        <>
            <section className='lowerbody-container'>
                <h2> Why OAK?</h2>
                <Container>
                    <Row>

                        <Col xs={12} md={4} className='lower-container'>
                            <h1>Vary your training</h1>
                            <p>Train from the gym, swimming, climbing, yoga, padel, crossfit and everything in between.</p>
                        </Col>

                        <Col xs={12} md={4} className='lower-container'>
                            <h1>Unique experiences</h1>
                            <p>Train in unique boutique studios reminiscent of everything from an LA nightclub to a yoga retreat in India.</p>
                        </Col>

                        <Col xs={12} md={4} className='lower-container'>
                            <h1>Freedom</h1>
                            <p>Train what and where you want. No commitment period and pause your membership whenever you want.</p>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}
export default LowerBody