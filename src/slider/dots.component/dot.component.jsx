import React from 'react';
import './dot.component.style.css';

const Dot = ({ slideId, dotId }) => (
  <div className={`dot ${dotId === slideId ? 'white' : 'gray'}`}></div>
);

export default Dot;
