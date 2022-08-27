import React, { useState } from 'react'
import { Modal,Button,Form} from 'react-bootstrap';
import '../Css/TransferPage.css';
import {GrLocationPin} from 'react-icons/gr'


const ModalTransfer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Book a Transfer
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
                <Modal.Title>Book your Transfer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="From( airports,ports,address)" />
                            <Form.Control type="password" placeholder="To(airports,ports,address)"/>                   
                    </Form.Group>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
      </>
    )

}

export default ModalTransfer;