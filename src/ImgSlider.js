import React, { useRef, useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';
import { useContext } from 'react';
import DataContext from './Context/DataContext';
import img1 from './media/images/Untitled design.png'
import img2 from './media/images/wp8587805-minimal-code-wallpapers.png'
import img3 from './media/images/wp9109396.jpg'
import img4 from './media/images/wp11657064.jpg'

const ImgSlider = () => {
  const {width} = useContext(DataContext)
  const imgSliderRef = useRef(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);
  let [count, setCount] = useState(1);
  const indexRoundRef = useRef([]);
  const backgroundImages = [
    {
      id:1,
      style : {
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      }
    },
    {
      id:2,
      style : {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      }
    },
    {
      id:3,
      style : {
        backgroundImage: `url(${img3})`,
        backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      }
    },
    {
      id:4,
      style : {
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
      backgroundPosition: 'center', 
      }
    }
  ]

  const handleRightClick = () => {
    if (imgSliderRef.current) {
        const childWidth = imgSliderRef.current.firstChild.clientWidth;
      imgSliderRef.current.scrollBy({ left: childWidth, behavior: 'smooth' });
      setCount(prevCount => {
        const newCount = prevCount + 1;
        console.log(newCount)
        return newCount;
    });
    }
  };

  const handleLeftClick = () => {
    if (imgSliderRef.current) {
        const childWidth = imgSliderRef.current.firstChild.clientWidth;
      imgSliderRef.current.scrollBy({ left: -childWidth, behavior: 'smooth' });
      setCount(prevCount => {
        const newCount = prevCount - 1;
        console.log(newCount)
        return newCount;
    });
    }
  };

  const checkScrollButtons = () => {
    if (imgSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = imgSliderRef.current;
      setIsScrollableLeft(scrollLeft > 0);
      setIsScrollableRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    imgSliderRef.current.addEventListener('scroll', checkScrollButtons);
    return () => {
        if(imgSliderRef.current){
            imgSliderRef.current.removeEventListener('scroll', checkScrollButtons);
        }
      
    };
  }, [ImgSlider]);
  useEffect(() =>{
    indexRoundRef.current.forEach((item, index) => {
      if(index === count){
         item.classList.add('currentPage');
      }
      else{
        item.classList.remove('currentPage');
      }
      
    });
  },[count])
  useEffect(() => {
    if (imgSliderRef.current) {
      imgSliderRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setCount(1);
    }
  }, [width]);

  return (
    <div  className={width > 992 ? "Imgslider w-full" : "Imgslider w-small"}>
      {isScrollableLeft && (
        <div className={width > 992 ? "leftscrlbtn scrlbtn w-full" : "leftscrlbtn scrlbtn w-small"} onClick={handleLeftClick}>
          <div className="btndiv">
            <FaLessThan />
          </div>
        </div>
      )}
      <div className="imgSliderScrollbar" ref={imgSliderRef}>
      {backgroundImages.map(item =>(
        <div className="child" key={item.id}>
          <div className="img" style={item.style} >
            <div className={width > 992 ? "imageNumSlide w-full" : "imageNumSlide w-small"}>SLide with describing <br /> content related to club <br /> {item.id}</div>
          </div>
        </div>
      ))}
       
     
      </div>
      {isScrollableRight && (
        <div className={width > 992 ? "rightscrlbtn scrlbtn w-full" : "rightscrlbtn scrlbtn w-small"} onClick={handleRightClick}>
          <div className="btndiv">
            <FaGreaterThan />
          </div>
        </div>
      )}
      <div className="indexRoundDiv">
      {backgroundImages.map(item =>(
        <span className='indexRound' key={item.id} ref={(el) => (indexRoundRef.current[item.id]) = el}></span>
      ))}
      </div>
    </div>
  );
};

export default ImgSlider;
