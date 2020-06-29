import React, { useState, useEffect } from 'react';
import './Slider.component.style.css';
import Image from './Image.component';
import Dots from './dots.component/dots.component';
import IMAGE_DATA from './images/IMAGES_DATA';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const imageArray = [1, 2, 3];

  useEffect(() => {
    const interval = window.setInterval(handleClick, 5000, 1);

    return () => clearInterval(interval);
  }, [index]);

  let interval = null;
  const handleClick = (n) => {
    n = index + n;
    if (n > 2) n = 0;
    if (n < 0) n = 2;

    setIndex(n);
    console.log(index);
  };

  return (
    <div className="slider-container">
      {IMAGE_DATA.map((image, idx) => (
        <Image key={idx} id={idx} image={image} currentIdx={index} />
      ))}
      <Dots slideId={index} slides={imageArray} />
      <button className="left-btn slider-btn" onClick={() => handleClick(-1)}>
        <i class="fas fa-angle-left"></i>
      </button>
      <button className="right-btn slider-btn" onClick={() => handleClick(1)}>
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Slider;
