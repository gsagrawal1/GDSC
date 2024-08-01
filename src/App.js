import React, { useEffect } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Home from './Home';
import Navbar from './Navbar';
import OurInfo from './OurInfo';
import Footer from './Footer';
import LastFooter from './LastFooter';
import Apply from './Apply';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <OurInfo />
        <Footer />
        <LastFooter />
      </DataProvider>
   
  );
}

export default App;
