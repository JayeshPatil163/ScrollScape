import React, { useEffect, useState } from 'react';
import './Imageitem.css'; // Import the ImageItem.css file

const Imageitem = ({ src, alt, desc, desc_brief, activeIndex, keyIndex }) => {
  return (
    <div className={`image-item ${activeIndex ? 'slide' : ''}`}>
      <img src={src} alt={alt} className={`${keyIndex && activeIndex ? 'shrink' : ''}`}/>
      <div className = {`desc ${keyIndex && activeIndex ? 'shrink' : ''}`}>
      <h2>{desc}</h2>
      <p1>{desc_brief}</p1>
      </div>
      <div className={`text-bg ${keyIndex && activeIndex ? 'shrink' : ''}`}></div> 
    </div>
  );
};

export default Imageitem;