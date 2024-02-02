import React from "react";
import { FaDesktop,FaStar,FaHeart } from "react-icons/fa";
import img1 from '../Assets/images/1.webp';
import img2 from '../Assets/images/2.jpg';
import img3 from '../Assets/images/3.webp';
const CustomerFeedback = () => {
    return (
        <>  
            <div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h5 className="cus_name">Shravya BR <span className="verifiedBuyer"><FaDesktop/> Verified Buyer</span></h5>
                        <p><FaStar className="rating"/> 4 | Powder Blue, Size L</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <h5>7 Months Ago</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p><strong>Superb Product</strong> <FaHeart className="redHeart"/> great quality and nice design. Will buy more product from Veidro. </p>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <img src={img1} className='feedImg'/>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <img src={img2} className='feedImg'/>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <img src={img3} className='feedImg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerFeedback