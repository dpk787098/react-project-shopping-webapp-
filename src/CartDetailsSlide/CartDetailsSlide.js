import React, { Component } from 'react';
import './CartDetailsSlide.css';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/actions';

class CartDetailsSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
         }
    }

    calculateTotalPrice = () =>{
        let tempPrice = 0;
        let calPrice = 0;
        if(this.props?.cartData?.length>0){
            this.props?.cartData?.map((data,index)=>{
                calPrice = data.price * data.count;
                tempPrice = tempPrice + calPrice;

                return this.setState({totalPrice: tempPrice});
            })
        }
        else{
            this.setState({totalPrice: 0});
        }
        
    }

    componentDidMount(){
        this.calculateTotalPrice()
    }

    componentDidUpdate(newProps){
        console.log("second last");
        if(newProps.cartData !== this.props.cartData){
            console.log("last");
            this.calculateTotalPrice()
        }
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
                <div className="items_container">
                    {this.props?.cartData?.map((data,index)=>
                        <div className="each_item_wrapper">
                            <div className="item_and_count_wrapper">
                                <div className="img_and_detail_wrapper">
                                    <img alt={data.name} src={data.preview} />
                                    <div className="name_and_price_wrapper">
                                        <h3>{data.name}</h3>
                                        <p>RS: {data.price}</p>
                                    </div>
                                </div>
                                <div className="each_item_count">{data.count}</div>
                            </div>
                            <div className="remove_item_btn" onClick={()=>this.props.removeCartData(data.id)}>Remove</div>
                        </div>
                    )}
                </div>
                <div className="checkout_content_wrapper">
                    <div className="subtotal_price_wrapper">
                        <p>Subtotal</p>
                        <p>RS {this.state.totalPrice}</p>
                    </div>
                    <div className="checkout_btn">Continue to Checkout</div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (globalStore) => ({
    cartData: globalStore?.productReducer?.cartData
})

const mapDispatchToProps = {
    removeCartData : (data) =>removeFromCartAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartDetailsSlide);