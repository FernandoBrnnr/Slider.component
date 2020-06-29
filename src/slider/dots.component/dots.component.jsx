import React from 'react';
import Dot from './dot.component';
import './dots.component.style.css';

const Dots = ({ slideId, slides }) => {
  {
    console.log(`dots ${slideId}`);
  }
  return (
    <div className="dots-container">
      {slides.map((slide, id) => (
        <Dot slideId={slideId} dotId={id} key={id} />
      ))}
    </div>
  );
};

export default Dots;
