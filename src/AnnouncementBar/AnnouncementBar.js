import React, { Component } from 'react';
import './AnnouncementBar.css';

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="annoucement_banner">
                <div className="announcement_title">Announcement</div>
                <div className="announcement_detail">How we're responding to COVID-19</div>
            </div>
         );
    }
}
 
export default Announcement;