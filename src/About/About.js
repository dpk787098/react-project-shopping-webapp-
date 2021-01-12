import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import about_landing_picture from '../assets/about_landing_picture.jpg';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <>
                <LandingSection 
                    imgLink={about_landing_picture}
                    paddingLeft="6%"
                    paddingTop="6%"
                >
                    <h1 className="about_title">Your Adventure Awaits</h1>
                    <p className="about_description">Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.</p>
                    <a className="about_landing_btn" href="./shop">Shop Merch</a>
                </LandingSection>
            </>
         );
    }
}
 
export default About;