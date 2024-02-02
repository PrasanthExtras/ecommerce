import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Assets/css/sizeselector.css';
const SizeSelector = ({ onSizeChange,selectedSize }) => {
  const sizes = [28,30,32,34,36,38,40,42,44];

  const handleSizeClick = (size) => {
    onSizeChange(size); // Pass the selected size to the parent component
  };

  return (
    <div className="size-selector">
      <div>
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? 'active' : 'normal'}
            onClick={() => handleSizeClick(size)}
            className="sizeBtn"
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;