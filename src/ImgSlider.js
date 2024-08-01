import React, { useRef, useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const ImgSlider = () => {
  const {width} = useContext(DataContext)
  const imgSliderRef = useRef(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);

  const handleRightClick = () => {
    if (imgSliderRef.current) {
        const childWidth = imgSliderRef.current.firstChild.clientWidth;
      imgSliderRef.current.scrollBy({ left: childWidth, behavior: 'smooth' });
    }
  };

  const handleLeftClick = () => {
    if (imgSliderRef.current) {
        const childWidth = imgSliderRef.current.firstChild.clientWidth;
      imgSliderRef.current.scrollBy({ left: -childWidth, behavior: 'smooth' });
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
        <div className="child"><div className="img" ></div></div>
        <div className="child"><div className="img" ></div></div>
        <div className="child"><div className="img" ></div></div>
        <div className="child"><div className="img" ></div></div>
        <div className="child"><div className="img" ></div></div>
      </div>
      {isScrollableRight && (
        <div className={width > 992 ? "rightscrlbtn scrlbtn w-full" : "rightscrlbtn scrlbtn w-small"} onClick={handleRightClick}>
          <div className="btndiv">
            <FaGreaterThan />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgSlider;
