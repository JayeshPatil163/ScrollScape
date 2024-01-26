import './App.css'; 
import React, {useState} from 'react';
import Imageitem from './Imageitem';
import _debounce from 'lodash/debounce';

function App() { 
  const imageQueue = [
    {src: 'Iron man.jpg', alt: 'Iron man', desc: 'Iron Man', desc_brief: 'Genius inventor Tony Stark in powered suit with advanced technology.Yes, you can add transition animations to text when it changes by using CSS transitions. CSS transitions allow you to smoothly animate property changes over a specified duration. In this case, you can use transitions to create a smooth effect when the text content of a <p> tag changesHeres an example of how you can achieve this with CSS:'},
    {src: 'CA.jpg', alt: 'Captain America', desc: 'Captain America', desc_brief: 'Super-soldier with enhanced strength, agility, and iconic vibranium shield.'},
    {src: 'thor.jpg', alt: 'Thor', desc: 'Thor', desc_brief: 'Norse god, wields enchanted hammer Mjolnir, controls lightning, and superhuman strength.'},
    {src: 'Black widow.jpg', alt: 'Black Widow', desc: 'Black Widow', desc_brief: 'Elite spy and martial artist with exceptional agility and marksmanship.'},
    {src: 'Hulk.jpg', alt: 'Hulk', desc: 'Hulk', desc_brief: 'Enormous, superhuman strength, transforms from Dr. Bruce Banner when enraged.'},
    {src: 'tony stark.jpg', alt: 'Tony Stark', desc: 'Tony Stark', desc_brief: 'Genius billionaire, inventor, and superhero known as Iron Man.'},
    {src: 'ronin.jpg', alt: 'Ronin', desc: 'Ronin', desc_brief: 'Skilled martial artist with proficiency in weapons and stealth.'},
    {src: '19706.jpg', alt: 'Spider-Man', desc: 'Spider-Man', desc_brief: 'Agile hero with wall-crawling, super strength, and spider-sense.'}
  ]

  const [desc, setdesc] = useState(imageQueue[7].desc); 
  const [desc_brief, setdescbrief] = useState(imageQueue[7].desc_brief);
  const [src1, setsrc1] = useState(imageQueue[7].src); 
  const [alt1, setalt1] = useState(imageQueue[7].alt);  
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [transitionTrigger, setTransitionTrigger] = useState(false); 
  const [visibleImages, setVisibleImages] = useState(imageQueue);
   
  const handleVideoEnd = () => {
    setShowVideo(false);
  }; 

  const handleScroll = () =>
  { 
      setTransitionTrigger(true);
      setButtonDisabled(true);

      const timeout = setTimeout(() => {
        setTransitionTrigger(false);

        setsrc1(visibleImages[0].src);
        setalt1(visibleImages[0].alt);

        const movedImage = visibleImages.shift();
        setVisibleImages([...visibleImages,movedImage]); 

      }, 1000);

      setdesc(visibleImages[0].desc);
      setdescbrief(visibleImages[0].desc_brief);
      const timeout1 = setTimeout(() => {
        setButtonDisabled(false);
      }, 100);
  
      return () => clearTimeout(timeout1,timeout); 
  };
  
  return (
    <><div className="Background" > 
    <div className={`media-container ${showVideo ? 'hide-image' : 'show-image'}`}>
    
          <video className='video_spec' autoPlay muted
          onEnded={handleVideoEnd}>
              <source src="video_spidy.mp4" type='video/mp4' />
              Your browser does not support the video tag.
          </video>
    
      <img src = {visibleImages[0].src}
          className={`img_spec ${transitionTrigger ? '' : 'scale-background'}`}
          alt={visibleImages[0].alt}>
      </img>
      <img src = {src1}
          className="img_spec1"
          alt={alt1}>
      </img>

    </div>
    
    <text className='overlay_text'> 
    <h1>{desc}</h1>
    <p>{desc_brief}</p>
    </text> 
    
    <div className="image-queue">
          {visibleImages.map((item, index) => (
            <Imageitem
              key={index}
              src={item.src}
              alt={item.alt}
              desc = {item.desc}
              desc_brief = {item.desc_brief}
              activeIndex = {transitionTrigger}
              keyIndex = {index === 0} 
            />
          ))}
    </div>
    <button className={`button ${isButtonDisabled ? 'scale' : 'scale-up'}`} onClick={handleScroll} disabled={transitionTrigger}>
            <img src="arrow.png" alt = "logo" class = "foreground"></img>
    </button>
    </div>
  </>
  );
}

export default App; 
