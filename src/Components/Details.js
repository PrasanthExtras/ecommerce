import React,{useState} from "react";
import img1 from '../Assets/images/1.webp';
import img2 from '../Assets/images/2.jpg';
import img3 from '../Assets/images/3.webp';
import img4 from '../Assets/images/4.webp';
import img5 from '../Assets/images/5.jpg';
import img6 from '../Assets/images/6.jpg';
import img7 from '../Assets/images/7.jpg';
import img8 from '../Assets/images/8.jpg';
import { FaHeart,FaStar,FaDesktop,FaCaravan,FaBluetooth } from 'react-icons/fa';
import { Form, FormControl,InputGroup,Button } from 'react-bootstrap';
import Offers from "./Offers";
import SizeSelector from "./SizeSelector";
import Information from "./Information";
import ColorSlider from "./ColorSlider";
import Parent from "./Parent";
import '../Assets/css/details.css'
import RatingProgressBar from "./RatingProgressBar";
import CustomerFeedback from "./CustomerFeedback";
import ProductCard from "./ProductCard";
import RecentProducts from "./RecentProducts";

const Details = () => {

    const mainImages = [{image : img1,id:1,alt:'front'},{image : img2,id:2,alt:'back'},{image : img3,id:3,alt:'right'},{image : img4,id:4,alt:'left'}];

    const colors = [
        { color: 'red', image: img1 },
        { color: 'blue', image: img2 },
        { color: 'green', image: img3 },
        { color: 'yellow', image: img4 },
        { color: 'pink', image: img5 },
        { color: 'orange', image: img6 },
        { color: 'grey', image: img7 },
        { color: 'maroon', image: img8 },
    ];

    const informations = [
        { title: 'Product Description', description: 'Manufacture,Care and Fit', content: 'Content for Section 1',icon : FaDesktop },
        { title: 'Free Shipping', description: 'We offer free shipping across India', content: 'Content for Section 2',icon : FaCaravan },
        { title: '14 Returns & Exchange', description: 'Know about return and exchange policy', content: 'Content for Section 3', icon: FaBluetooth},
    ];
    
    const [selectedColor, setSelectedColor] = useState((colors[0].color).toUpperCase());
    const [selectedSize, setSelectedSize] = useState(32);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleSlideClick = (color) => {
        setSelectedColor(color);
    };

    const products = [
        { name : 'Black Veirdo T-shirt', image : img1, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img2, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img3, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img4, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img5, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img6, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img7, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img8, price : 1200, isNew : true }
    ];
    
    const recent_products = [
        { name : 'Black Veirdo T-shirt', image : img1, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img2, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img3, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img4, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img5, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img6, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img7, price : 1200, isNew : true },
        { name : 'Black Veirdo T-shirt', image : img8, price : 1200, isNew : true }
    ];

    return(
        <>
            <div className="container">
                <div className="row mt-4 mb-5">
                    <div className="col-md-6 col-sm-12">   
                        {mainImages.map((elem) => {
                            const {image,id,alt} = elem;
                            return <img src={image} alt={alt} key={id} className='mainImg'/>
                        })}                     
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="amount_main">₹ 1500<span className="oldprice_main">₹ 2500</span><span className="off_main">20% Off</span></h6>
                            </div>
                            <div className="col-md-6">
                                <FaHeart className="wishlist"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Flower Printed Oversized Fit</h2>
                            </div>
                            <div className="col-md-12">
                              <h5 className="review_main"><FaStar className="rating"/> <span>4.5</span> | <span className="count">2K</span></h5>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-md-12">
                                <h4 className="block_head">OFFERS</h4>
                            </div>
                            <div className="col-md-12">
                              <Offers />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="block_head">COLOR - {selectedColor}</h4>
                            </div>
                            <div className="col-md-12">
                                <ColorSlider colors={colors} selectedColor={selectedColor} onSlideClick={handleSlideClick}/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="block_head">SELECT - SIZE</h4>
                            </div>
                            <div className="col-md-12 mt-3">
                                <SizeSelector onSizeChange={handleSizeChange} selectedSize={selectedSize}/>
                            </div>
                            <div className="col-md-12">
                                <Button className="cart_btn btn w-100 p-20">Add to Cart</Button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="block_head">CHECK FOR DELIVERY DETAILS</h4>
                            </div>
                            <div className="col-md-12 mt-4">
                            <div className="input-group p-0 mb-5">
                                <Form className="Delivery_details">
                                    <InputGroup className="p-0">
                                        <FormControl type="text" placeholder="Enter Pincode" />
                                        <Button type="submit">check</Button>
                                    </InputGroup>
                                </Form>
                            </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <h4 className="block_head">PRODUCT INFORMATION</h4>
                            </div>
                            <div className="col-md-12 mt-4">
                                <Information items={informations} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="block_head">CUSTOMER RATINGS & REVIEWS</h4>
                            </div>
                            <div className="row mt-3 pb-3">
                                <div className="col-md-6 reviews">
                                    <h1>4.0</h1>
                                    <p className="mb-0"> 84 Reviews</p>
                                    <FaStar className="rating"></FaStar>
                                    <FaStar className="rating"></FaStar>
                                    <FaStar className="rating"></FaStar>
                                    <FaStar className="rating"></FaStar>
                                    <FaStar className="ratingGrey"></FaStar>
                                </div>
                                <div className="col-md-6 ratings">
                                    <RatingProgressBar value="15" count="5" color="success"/>
                                    <RatingProgressBar value="34" count="4" color="success"/>
                                    <RatingProgressBar value="26" count="3" color="success"/>
                                    <RatingProgressBar value="0" count="2" color="success"/>
                                    <RatingProgressBar value="0" count="1" color="success"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <CustomerFeedback />
                   </div>
                </div>
                <div className="row mt-5">
                    <div className="row text-center">
                        <h4>SIMILAR PRODUCTS</h4>
                    </div>
                    <div className="row mt-2">
                        {products && products.map((ele) => {
                            return(
                            <div className="col-md-3 col-sm-6">
                                <ProductCard product={ele} />
                            </div>
                            );
                        })}
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="row text-center">
                        <h4>RECENTLY VIEWED PRODUCTS</h4>
                    </div>
                    <div className="row mt-2">
                        <RecentProducts recentProducts={recent_products}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parent(Details)