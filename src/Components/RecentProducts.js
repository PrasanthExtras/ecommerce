// ColorSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/colorslide.css';
import ProductCard from './ProductCard';
import '../Assets/css/recentproduct.css';

const RecentProducts = ({ recentProducts }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        swipeToSlide: true,
        prevArrow: <div className="slick-arrow slick-prev">{'<'}</div>,
        nextArrow: <div className="slick-arrow slick-next">{'>'}</div>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
      return (
        <Slider {...settings} className='slider_Height'>
          {recentProducts.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      );
    };
    

export default RecentProducts;
