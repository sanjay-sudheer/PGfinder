import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import apartment from '../images/apartment.jpg'
import './login.css'
export default function login() {
  return (

    <MouseParallaxContainer>
        <div className='login'>
      <div className='left'>
        <h2>Welcome to PGfinder!</h2>
        <p>Find your perfect PG  in seconds with PGfinder
          The ultimate time-saving app for locating nearby PG!</p>
        <button className='login-btn'><img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
        ></img>Sign in with Google</button>
      </div>
      <div className='right'>
        <MouseParallaxChild factorX={0.05} factorY={0}><img src={apartment} alt="" /></MouseParallaxChild>
      </div>

    </div>
    </MouseParallaxContainer>
    
  )
}
