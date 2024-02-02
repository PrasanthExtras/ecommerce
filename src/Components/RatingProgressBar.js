import React from 'react';

const RatingProgressBar = ({ value,count,color }) => {
  const progressStyle = {
    width: `${value}%`,
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <span>{count}</span>
        <div className="progress mx-3 flex-grow-1">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={progressStyle}
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <span>({value})</span>
      </div>
    </div>
  );
};

export default RatingProgressBar;
