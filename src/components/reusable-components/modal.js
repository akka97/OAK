import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyModal = (props) => {

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        console.log("props---", props);
        e.preventDefault();
    }


    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal show={props.show} hide={props.show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder='Insert name' name="name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.lastname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text" placeholder='Insert lastname' name="lastname" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" name="email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MyModal;