import React, { Component } from 'react';
import './Shop.css';
import CustomSection from '../CustomSection/CustomSection';
import ProductCard from '../ProductCard/ProductCard';
import OpenSectionImg1 from '../assets/open_section_img1.jpg';
import OpenSectionImg2 from '../assets/open_section_img2.jpg';
import OpenSectionImg3 from '../assets/open_section_img3.jpg';
import Footer from '../Footer/Footer';
import BlackBanner from '../BlackBanner/BlackBanner';
import { connect } from 'react-redux';
import { storeProductsDataAction } from '../actions/actions';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <BlackBanner title="Shop Our Products" />
                <div className="feature_item_wrapper">
                    <div className="shop_feature_image"></div>
                    <div className="feature_item_detail_wrapper">
                        <h3>White Tent</h3>
                        <p>$ 200.00 USD</p>
                    </div>
                    <div className="feature_item_btn">Featured Item</div>
                </div>
                <CustomSection>
                    <div className="products_section">
                        <div className="prod_section_left">
                            <h2>Shop by Category</h2>
                            <ul className="category_list">
                                <li>Gift Cards</li>
                                <li>Tents</li>
                                <li>Accessories</li>
                                <li>Packs</li>
                            </ul>
                        </div>
                        <div className="products_container">
                        {
                            this.props?.productData?.map((data,index)=>
                                <ProductCard data={data} key={index} />
                            )
                        }
                        </div>
                    </div>
                </CustomSection>
                <Footer />
            </>
         );
    }
}

const mapStateToProps = (globalStore) => ({
    productData: globalStore?.productReducer?.productData
})

const mapDispatchToProps = {
    storeProductsData : (data) =>storeProductsDataAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);