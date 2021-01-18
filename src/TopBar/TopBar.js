import React, { Component } from 'react';
import './TopBar.css';
import BrandLogo from '../assets/brand_logo.svg';
import CartIcon from '../assets/cart_icon.svg';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="top_bar_container">
                <img src={BrandLogo} alt="brand logo" />
                <nav className="nav_wrapper">
                    <Link to='/' className="nav_item">Home</Link>
                    <Link to='/about' className="nav_item">About</Link>
                    <Link to='/shop' className="nav_item">Shop</Link>
                    <Link to='/donate' className="nav_item">Donate</Link>
                    <Link to='/contact' className="nav_item">Contact</Link>
                    <div onClick={this.props.onClick} className="cart_icon_wrapper">
                        <img src={CartIcon} alt="cart icon" />
                        <p>1</p>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default TopBar;