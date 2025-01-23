import React, { useEffect } from 'react'
import Home from './components/Home'
import images from './assets/images'
import Carousel from './components/Carousel'

function App() {

  var [count, setCount] = React.useState(0);
  const [src, setSrc] = React.useState(images[0]); // Initialize with the first image

  // Update `src` whenever `count` changes
  useEffect(() => {
    setSrc(images[count]);
  }, [count]);

  function handleClickPost() {
    if (count > images.length - 1) {
      setCount(4);
    }else{
      count++
      setCount(count);
    }
  }

  function handleClickPrev() {
    if (count < 0) {
      setCount(0);
  }else{
      count--
      setCount(count);
      
  }
  }
  return (
    <div>
      <Home/>
      <Carousel src = {src}/>
      <div>
        <button disabled = {count === 0}onClick={handleClickPrev}>Prev</button>
        <button disabled={count === 4}onClick={handleClickPost}>Next</button>   
      </div>
    </div>
    
  )
}

export default App