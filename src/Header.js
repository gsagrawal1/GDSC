import React from 'react'
import  { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const Header = () => {
  const {width} = useContext(DataContext)
  const { list, setList } = useContext(DataContext)
 
  const textContainerRef = useRef(null);
  useEffect(() => {
    const textContainer = textContainerRef.current;
    const text = textContainer.textContent;
    textContainer.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char  === ' ' ? '\u00A0' : char;;
      span.className = 'letter';
      span.style.animationDelay = `${index * 0.1}s`;
      textContainer.appendChild(span);
    });
  }, []);
  const navigate = useNavigate();
  const handleApplyClick = () =>{
    const listItems = list.map(item => item.id === 2 ? {...item, isSelect : true} : {...item, isSelect : false})
    setList(listItems)
    navigate('/apply');
    
  }
  return (
    <div className='header'>
      <div className="headerbox">
        <div className={width > 992 ? "welcometext w-full" : "welcometext w-small"}>Welcome to Google Developer <br /> student club
        </div>
        <div className={width > 992 ? "hiringtitle w-full" : "hiringtitle w-small"}><span className='text-to-reveal'  ref={textContainerRef}>we are hiring!!</span></div>
        <div  className={width > 992 ? "welcometextphrase w-full" : "welcometextphrase w-small"}>Ready to make an impact? The GDSC is looking <br /> for enthusiastic members like you!</div>
        
        <div  className={width > 992 ? "hirebuttons w-full" : "hirebuttons w-small"} onClick={handleApplyClick}><span>Apply Now</span></div>
        
      </div>
    </div>
  )
}

export default Header
