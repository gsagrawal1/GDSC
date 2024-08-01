import { Route, Routes} from "react-router-dom";
import {DataProvider} from "./Context/DataContext";
import Home from "./Home";
import Navbar from "./Navbar";
import OurInfo from './OurInfo';
import Footer from "./Footer";
import LastFooter from "./LastFooter";
import Apply from "./Apply";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
 
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(()=>{
    navigate('/');
  },[navigate])
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <DataProvider>
      <Navbar />
      <Routes basename={process.env.PUBLIC_URL}>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/apply" element={<Apply />}></Route>
       </Routes>
       <OurInfo />
      <Footer />
      <LastFooter />

      </DataProvider>
     

    </div>
  );
}

export default App;
