import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import home_landing_picture from '../assets/home_landing_picture.jpg';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "Serving you since 1989.",
            description: "Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.",
         }
    }

    render() { 
        return ( 
            <>
                <LandingSection title={this.state.title} description={this.state.description} imgLink={home_landing_picture}>
                    <h1 className="title">Serving you since 1989.</h1>
                    <p className="description">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                    <a className="landing_btn" href="./shop">Shop Merch</a>
                </LandingSection>
            </>
         );
    }
}
 
export default Home;