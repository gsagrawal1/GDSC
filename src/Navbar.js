import React from 'react'
import { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
import logo from './media/logo/GDSC (1).png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => { 

  const logo1 = logo;
  const {list, setList, handleNavSelect, width, leftNavClick, handleleftnavClick } = useContext(DataContext)
   
  return ( 
    <div 
     className={width > 992 ? 'Navbar w-full' : 'Navbar w-small'} 
    >
    <div className="marquee">
        <marquee behavior="" direction="">☎️ ☎️ The hiring process for our club is currently underway. Seize the opportunity and join us!</marquee>
    </div>
    <div className={width > 992 ? 'navleft w-full' : 'navleft w-small'} >
       <div className="navitems">
       
       <span  className={width > 992 ? 'headlogo w-full' : 'headlogo w-small'}>
       <Link to='/' onClick={() => handleNavSelect(1)}>
       <img src={logo1} alt='GDSC Logo'></img>
       </Link>
       </span>
       
       </div>
       
       {width>992 && list && list.length > 0 ? (
        list.map((item) => (
            <Link to={item.link} key={item.id} style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="navitems" 
            key={item.id}
            onClick={() => handleNavSelect(item.id)}
            style={((item.isSelect) ? {color: 'white'} : { color: 'grey'})}
             >  
                
                <span key={item.id}
                 style={((item.isSelect) ? {borderBottom: '2px solid white'} : null)}
                >{item.name}
                </span>
                
            </div>
            </Link>
                ))
            ) : (
                null
            )}
            </div>

            <div className="navright">
                {width > 992 ? (
                    <>
                <div className="navbuttons">
                    <span className='loginbtn'>Login</span>
                </div>
                <div className="navbuttons">
                    <span className='signupbtn'>Sign Up</span>
                </div>
                </>
            ): (
                <div className="threelineicon" onClick={handleleftnavClick}>
                    <FaBars />
                </div>
            )}
            {width < 992 ? (
                <>
                    <div className="leftbar" 
                    style={leftNavClick ? {display: 'flex'} : {display: 'none'}}
                    >
                        <div className="topleftbtn">
                                <div className="navbuttons">
                                    <span className='loginbtn'>Login</span>
                                </div>
                                <div className="navbuttons">
                                    <span className='signupbtn'>Sign Up</span>
                                </div>
                        </div>
                        <div className="navitemsleftbar">
                            {
                                list.map((item) => (
            <div className="navitems" 
            key={item.id}
            onClick={() => handleNavSelect(item.id)}
            style={((item.isSelect) ? {color: 'white'} : { color: 'black'})}
             >  
                <Link to={item.link} style={{textDecoration: 'none', color: 'inherit'}}>
                <span key={item.id} onClick={handleleftnavClick}
                 style={((item.isSelect) ? {borderBottom: '2px solid white'} : null)}
                >{item.name}
                </span>
                </Link>
            </div>
                ))
                            }
                        </div>
                    </div>
                </>
            ): null}
            </div>
        
    </div>
  )
}

export default Navbar
