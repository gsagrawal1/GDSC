import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from '../api/handleapi'
import useWindowSize from "../hooks/useWindowSize";
import { useLocation } from 'react-router-dom';
const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const {width} = useWindowSize() 
    const [leftNavClick, setLeftNavClick] = useState(false);
    const { pathname } = useLocation();
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem('navList');
        return savedList ? JSON.parse(savedList) : [
          { id: 1, name: "Home", link: "/", isSelect: true },
          { id: 2, name: "Apply", link: "/apply", isSelect: false },
          { id: 3, name: "Upcomings", link: "/", isSelect: false },
          { id: 4, name: "Events", link: "/", isSelect: false }
        ];
      });
    
      const handleNavSelect = (id) => {
        const updatedList = list.map(item => 
          item.id === id ? { ...item, isSelect: true } : { ...item, isSelect: false }
        );
        setList(updatedList);
        localStorage.setItem('navList', JSON.stringify(updatedList));
      };
  const handleleftnavClick = () => {
    setLeftNavClick(!leftNavClick);
  }

  

    return(
        <DataContext.Provider value={{
             width, handleleftnavClick, leftNavClick,handleNavSelect, list, setList
        }} >
        {children}
        </DataContext.Provider>
    )
}
export default DataContext
