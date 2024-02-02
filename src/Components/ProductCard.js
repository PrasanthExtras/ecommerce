import React from 'react';
import '../Assets/css/card.css';
import { FaStar,FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { name, image, price, isNew } = product;
  
    return (
      <div className="card">
        {isNew && <div className="new-label">New</div>}
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <div className="row align-items-start">
            <div className="col-md-6">
              <h6 className="amount">₹ 1500<span className="oldprice">₹ 2500</span><span className="off">20% Off</span></h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-start prod_name'>{name}</h2>
            </div>
            <div className="col-md-12">
              <h5 className="review"><FaStar className="rating" /> <span>4.5</span> | <span className="count">2K</span></h5>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <div className="cart-section">
            Add to Cart
            </div>
            <div className="wishlist-section">
            <FaHeart className="heart-icon pinkHeart" />
            </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;