import React from 'react';
import '../Css/TheMiddleEra.css'
import '../Css/TheEnd.css'
import { Container} from 'react-bootstrap';
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
import {MdAccessTimeFilled} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const TheFooter = () => {
    return (
    <section>
        <Container>
            <div className='text'>
                <h2>   Don't hesitate to contact with us  </h2>
            </div>
            <section className='safety'>
                <div className='icon'>
                    <figure> <BsFillTelephoneInboundFill size={40} /> </figure>
                    <div className='last'>
                        <h6><strong>Our Phone</strong></h6>
                        <p>+30 697 324 27 08</p>
                    </div>
                </div>
                <div className='icons'>
                    <figure> <MdMarkEmailRead size={40}/> </figure>
                    <div className='last'> 
                        <h6><strong>Our email</strong></h6> 
                        <p>panagiotis_bouras@hotmail.com</p>
                    </div>
                </div>
                <div className='icons'>
                    <figure> <MdAccessTimeFilled size={40}/> </figure>
                    <div className='last'> 
                        <h6><strong>Our support</strong></h6>
                        <p>available from 07:30 to 21:00</p> 
                        </div>
                </div>
            </section>
        </Container>
        <br/>
        <footer sticky="bottom" className="color">
            <div className='endicons'>
                <figure> <BsFacebook size={25} className='iconing'/> </figure>
                <figure> <BsInstagram size={25} className='iconing'/> </figure>
                <figure> <AiOutlineMail size={25} className='iconing'/> </figure>
            </div>
            <hr className='endline'></hr>
            <br/>
            <p className='copy'> <AiOutlineCopyrightCircle size={20} className='c'/> 2022 All rights reserverd  </p>
        </footer>
    </section>    
    )
}

export default TheFooter