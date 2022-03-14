import './App.css';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import images from './images';


function App() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])



  return (
    <div className="App">
    
      <motion.div ref ={carousel} className='carousel' whileTap={{cursor: 'grabbing'}} animate={{y:90}}>
        <motion.div drag='x' dragConstraints={{right:0, left:-width}} className='inner-carousel'>
          {images.map(image => {
            return(
              <motion.div key = {image} className='item'>
                <img src={image} alt="slide" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
