import React from "react";
import { Form, FormControl,InputGroup,Button } from 'react-bootstrap';
import "../Assets/css/footer.css"; // Import your custom CSS for the Footer
const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="container-footer newsletter_block">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h1 className="head_nl">JOIN OUR<br/>VEIRDO FAM</h1>
                                <p className="clr_white">Here is the description in which we can give some details about the company.</p>
                            </div>
                        </div>
                        <div className="col-md-6 newsletter-subscription">
                            <div className="input-group">
                            <Form className="newsletter_fwidth">
                                <InputGroup>
                                    <FormControl type="email" placeholder="Enter your email" />
                                        <Button type="submit">Subscribe</Button>
                                </InputGroup>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social_links">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center">
                                <h6>INSTAGRAM</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h6>LINKEDIN</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h6>WHATSAPP</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h6>TWITTER</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-footer">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="col-head">
                                <h5>CATEGORIES</h5>
                            </div>
                            <ul>
                                <li><a href="#">NEW ARRIVALS</a></li>
                                <li><a href="#">BESTSELLERS</a></li>
                                <li><a href="#">WINTER-WEAR</a></li>
                                <li><a href="#">T-SHIRTS</a></li>
                                <li><a href="#">SHORTS</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="col-head">
                                <h5>COMPANY</h5>
                            </div>
                            <ul>
                                <li><a href="#">SWEAT SHIRTS</a></li>
                                <li><a href="#">T-SHIRTS</a></li>
                                <li><a href="#">VESTS</a></li>
                                <li><a href="#">OVERSIZED T-SHIRTS</a></li>
                                <li><a href="#">UNISEX</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="col-head">
                                <h5>COMPANY</h5>
                            </div>
                            <ul>
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">PRIVACY POLICY</a></li>
                                <li><a href="#">TERMS AND CONDITIONS</a></li>
                                <li><a href="#">WORK WITH US</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="col-head">
                                <h5>FOR CUSTOMERS</h5>
                            </div>
                            <ul>
                                <li><a href="#">CONTACT US</a></li>
                                <li><a href="#">FAQ'S</a></li>
                                <li><a href="#">TRACK ORDER</a></li>
                                <li><a href="#">RETURN POLICY</a></li>
                                <li><a href="#">SHIPPING POLICY</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <p>&copy; 2024 VEIRDO. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer