import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import SelectOption from './Components/Option_page/SelectOption';
import MenPage from './Components/MenPage/MenPage';
import WomenPage from './Components/WomenPage/WomenPage';
import KidsPage from './Components/KidsPage/KidsPage';
import PlusSize from './Components/PlusSize/PlusSize';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <MenPage /> */}
      <WomenPage />
      {/* <KidsPage /> */}
      {/* <PlusSize /> */}
      {/* <FrontPage /> */}
      {/* <SelectOption /> */}
    </div>
  );
}

export default App;
