// Offers.js
import React, { useState, useEffect } from 'react';
import '../Assets/css/offers.css'; // Import your custom CSS for styling

const Offers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
    const slides = [
      { id: 1, content: 'Slide 1' },
      { id: 2, content: 'Slide 2' },
      { id: 3, content: 'Slide 3' },
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          let newSlide = prevSlide + direction;
  
          // If we reached the last slide, loop back to the beginning in the current direction
          if (newSlide === slides.length || newSlide === -1) {
            newSlide = direction === 1 ? 0 : slides.length - 1;
          }
  
          return newSlide;
        });
      }, 3000);
  
      // Cleanup function
      return () => clearInterval(intervalId);
    }, [slides.length, direction]);
  
    const slideTransform = {
      transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
    };
  
    return (
        <div className='slider-container-wrapper'>
            <div className="slider-container" style={slideTransform}>
                {slides.map((slide, index) => (
                <div key={slide.id} className="slide" style={{ opacity: index === currentSlide ? 1 : 0 }}>
                    <div className='sliderStyle'>
                        <div className="row">
                            <div className="col-sm-10">
                                <h3>Buy 2 tees @ 699</h3>
                                <p>Add any 2 tees to the cart to avail</p>
                            </div>
                            <div className="col-sm-2">
                                <h4>{ currentSlide + 1} / {slides.length}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default Offers;