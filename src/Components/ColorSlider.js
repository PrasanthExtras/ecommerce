// ColorSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/colorslide.css';

const ColorSlider = ({ colors, selectedColor, onSlideClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
  };

  return (
    <div>
      <Slider {...settings} className='sliderHeight'>
        {colors.map((colorObj) => (
          <div
            key={colorObj.color}
            onClick={() => onSlideClick(colorObj.color.toUpperCase())}
            className={`slideMargin ${selectedColor.toLowerCase() === colorObj.color ? 'selected-slide' : ''}`}
          >
            <img
              src={colorObj.image}
              alt={`${colorObj.color} Product`}
              className={`product-image ${selectedColor.toLowerCase() === colorObj.color ? 'selected-image' : ''}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ColorSlider;
