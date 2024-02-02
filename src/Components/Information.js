import React, { useState } from 'react';
import { FaPlus, FaMinus, FaDesktop, FaCaravan, FaBluetooth } from 'react-icons/fa';
import '../Assets/css/information.css';

const Information = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="card">
          <div
            className={`card-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${index}`}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span className="icon">{<item.icon />}</span>
                  <div>
                    <h5 className="title_acc">
                      {item.title}
                    </h5>
                    <p className="description">
                      {item.description}
                    </p>
                  </div>
                  <span className="float_right">{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
              </button>
            </h2>
          </div>

          <div
            id={`collapse${index}`}
            className={`collapse ${activeIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
          >
            <div className="card-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
