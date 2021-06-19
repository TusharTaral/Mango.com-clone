import './App.css';
import React from "react";
import Router from './Router/Router';
import Navbar from './Components/Navbar/Navbar';
import WomenPage from './Components/WomenPage/WomenPage';



function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <WomenPage />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
