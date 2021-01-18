import React, { Component } from 'react';
import './CartDetailsSlide.css';

class CartDetailsSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    avoidClick(e){
        e.stopPropagation();
      }

    render() { 
        return ( 
            <div onClick={this.avoidClick.bind(this)} className="cart_item_wrapper">
                <div className="cart_detail_top_bar">
                    <h3>Your Cart</h3>
                    <i onClick={this.props.close} className="fas fa-times"></i>
                </div>
                <div>vjhjjh</div>
            </div>
         );
    }
}
 
export default CartDetailsSlide;