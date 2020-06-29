import React from 'react';
import './image.component.style.css';

const Image = ({ image, id, currentIdx }) => {
  return (
    <div
      className={`img-slide-container ${currentIdx === id ? 'block' : 'none'}`}
    >
      {console.log(image.url)}
      <img className="img-slider" src={require(`${image.url}`)} />
    </div>
  );
};

export default Image;
