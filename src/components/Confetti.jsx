import React,{useState,useEffect} from 'react'
import ReactConfetti from 'react-confetti'

const Confetti =() => {
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
    
      const [windowSize, setWindowSize] = useState(getWindowSize());
    
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
  return (
    <ReactConfetti
    width={windowSize.innerWidth}
    height={windowSize.innerHeight}
    />
  )
}

export default Confetti;