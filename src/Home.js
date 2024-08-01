import React from 'react'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ImgSlider from "./ImgSlider";
import FaQContact from './FaQContact';
import Sponsors from './Sponsors';
import Describe from './Describe';

const Home = () => {
  
  return (
    <>
    <Header />
    <ImgSlider />
    <Describe />
    <FaQContact />
    <Sponsors />

    </>
  )
}

export default Home
