import React from 'react';
import '../Css/TheMiddleEra.css'
import '../Css/TheEnd.css'
import { Card,Container } from 'react-bootstrap';
import {RiNumber1} from 'react-icons/ri'
import {RiNumber2} from 'react-icons/ri'
import {RiNumber3} from 'react-icons/ri'
const book = require('../Book.jpg'); // with require
const meet = require('../meet.jpg'); // with require
const enjoy = require('../enjoy.jpg'); // with require

const TheEnd = () => {
    return (
        <section>
            <div className='text'>
                <h2>    How it Works   </h2>
            </div>
            <Container>
                <div className='safety'>
                    <div className='icons'>
                        <RiNumber1 size={25} />
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <Card.Title> <strong className='boxes'>Book your transfer</strong></Card.Title>
                                <Card.Text className='boxes'>
                                    Reserve your transfer clicing the book button in the top
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='icons'>
                        <RiNumber2 size={25} />
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={meet} />
                            <Card.Body>
                                <Card.Title> <strong className='boxes'>Meet your local driver</strong></Card.Title>
                                <Card.Text className='boxes'>
                                    Your driver will wait you at the arrage point
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='icons'>
                        <RiNumber3 size={25} />
                        <Card border="light" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={enjoy} />
                            <Card.Body>
                                <Card.Title> <strong className='boxes'>Enjoy your ride</strong></Card.Title>
                                <Card.Text className='boxes'>
                                    Your driver will escort you in the car, help you with luggage
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
            <hr className='line'></hr>
        </section>
    )
}

export default TheEnd