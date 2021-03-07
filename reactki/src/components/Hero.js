import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Buttons from '../components/Button';
import Audio from '../components/Audio';
import '../components/Hero.css';



function Hero() {
    return (
        <div className='hero-wrapper'>
            <img src={'../images/store.jpg'} className='heroimg' width="100%" height="100%" />
            <div className='hero-container'>
                {/* <source src="reactki/public/videos/Song.mp3" type="audio/mpeg"></source> */}
                <h1><span> Welcome to DonkiHood </span></h1>
                <Buttons classname= 'herobutton'/>
            </div>
            <div className = 'overlay'></div>
        </div>
        
    )
}

export default Hero