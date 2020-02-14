import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom';

const Home = () =>
    ( <Fragment>
        <Helmet><title>Quiz-App-Home</title></Helmet>
        <div id="home">
            <section>
                <div>
                <div className="landing-page-heading">
                <h1> Quiz App</h1>
                </div>
                <div className="play-button-container">
                <Link to="/play/login"  className="play-button" >Play</Link>
                </div>
            {/*
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                </div> 
            */ }
            </div>
            </section>
  </div>
    </Fragment>
       
    )


export default Home;