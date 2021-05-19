import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import SelectOption from './Components/Option_page/SelectOption';
import Footer from './Components/Footer/Footer';
import WomenPage from './Components/WomenPage/WomenPage';
import MenPage from './Components/MenPage/MenPage';
import OptFooter from './Components/Option_div_footer/OptFooter';
import { MenMapPage } from './Components/MenPage/MenMapPage';



function App() {
  return (
    <div className="App">
      {/* <Navbar/>  */}
      {/* <FrontPage/> */}
      {/* <SelectOption /> */}
      {/* <OptFooter /> */}
      <MenMapPage />
      {/* <Footer /> */}
      {/* <WomenPage/> */}
      {/* <MenPage /> */}

    </div>
  );
}

export default App;
