import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import about_landing_picture from '../assets/about_landing_picture.jpg';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "Your Adventure Awaits",
            description: "Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.",
         }
    }
    render() { 
        return ( 
            <>
                <LandingSection title={this.state.title} description={this.state.description} imgLink={about_landing_picture}>
                    <h1 className="title">Your Adventure Awaits</h1>
                    <p className="description">Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.</p>
                    <a className="landing_btn" href="./shop">Shop Merch</a>
                </LandingSection>
            </>
         );
    }
}
 
export default About;