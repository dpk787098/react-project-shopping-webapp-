import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import home_landing_picture from '../assets/home_landing_picture.jpg';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() {
        return ( 
            <>
                <LandingSection 
                    imgLink={home_landing_picture}
                    paddingLeft="6%"
                    paddingTop="6%"
                >
                    <h1 className="home_landing_title">Serving you since 1989.</h1>
                    <p className="home_landing_description">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                    <a className="home_landing_btn" href="./shop">Shop Merch</a>
                </LandingSection>
            </>
         );
    }
}
 
export default Home;