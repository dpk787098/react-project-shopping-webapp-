import React, { Component } from 'react';
import Announcement from './AnnouncementBar/AnnouncementBar';
import TopBar from './TopBar/TopBar';
import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';
import Donate from './Donate/Donate';
import Contact from './Contact/Contact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <BrowserRouter>
        <div className="top_bar_wrapper">
          <Announcement />
          <TopBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;
