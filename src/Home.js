import React from 'react'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ImgSlider from "./ImgSlider";
import FaQContact from './FaQContact';

const Home = () => {
  
  return (
    <>
    <Header />
    <ImgSlider />
    <FaQContact />

    </>
  )
}

export default Home
