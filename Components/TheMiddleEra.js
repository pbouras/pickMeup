import React from 'react';
import '../Css/TheMiddleEra.css'
import { MdLocationOn } from 'react-icons/md';
import {GiAirplaneArrival} from 'react-icons/gi'
import {BsMap} from 'react-icons/bs'
import {GiPathDistance} from 'react-icons/gi'
import { Container } from 'react-bootstrap';

const TheMiddleEra = () => {

    return (
        <section>
            <Container>
                <div className='text'>
                    <h2> What we offer </h2>
                    
                    <h6> Book a trusted local driver to pick you up 
                        and introduce you to the destination, 
                        pre-order travel essentials, 
                        and get all your questions answered before or during the trip.  
                    </h6>
                </div>
                <section className='safety'>
                    <div className='icons'>
                        <figure> <MdLocationOn size={50} /> </figure>
                        <div className='feature'><p><strong>Address Pickup</strong></p></div>
                    </div>
                    <div className='icons'>
                        <figure> <GiAirplaneArrival size={50}/> </figure>
                        <div className='feature'> <p><strong>Airport Transfer</strong></p> </div>
                    </div>
                    <div className='icons'>
                        <figure> <BsMap size={50}/> </figure>
                        <div className='feature'> <p><strong>Long distance travels</strong></p> </div>
                    </div>
                    <div className='icons'>
                        <figure> <GiPathDistance size={50}/> </figure>
                        <div className='feature'> <p><strong>Mini tour of the local landmarks</strong></p> </div>
                    </div>
                    
                </section>
            </Container>
            <hr className='line'></hr>
        </section>



    )

}

export default TheMiddleEra