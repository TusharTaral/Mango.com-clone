import React from "react";
import styled from "./MenPage.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OptFooter from "../Option_div_footer/OptFooter";
export default function MenPage() {
  return (
    <div>
      <Navbar/>
      <div className={styled.top}>
        <h1>PREMIUM CAPSULE</h1>
        <p>
          This collection connects the quality of Japan with the essence of the
          Mediterranean
          <br /> thanks to the premium quality composition of the garment.
        </p>
        <button>Discover more</button>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.leisure}>
          <h1>Leisure Collection</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.linen}>
          <h1>Linen Collection</h1>
          <button>Discover more</button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.planet}>
          <h1>
            Dear planet,
            <br /> we are <br /> Committed
          </h1>
          <p>
            79% of our garments already
            <br /> have sustainable properties. <br />
            By 2022, it will be 100%​.
          </p>
          <button>Discover more</button>
        </div>
        <div className={styled.planet1}>
          <h1>Linen Collection</h1>
          <button>Discover more</button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.shirt}>
          <h1>Overshirts</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.shirt1}>
          <h1>Shirts</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.shirt2}>
          <h1>Trousers</h1>
          <button>Discover more</button>
        </div>
      </div>
    
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "50px ", fontWeight: "400" }}>Our Other Lines</h1>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.otherline}>
          <button className={styled.btn1}>Women</button>
        </div>
        <div className={styled.otherline1}>
          <button className={styled.btn1}>Kids</button>
        </div>
        <div className={styled.otherline2}>
          <button className={styled.btn1}>Plus size</button>
        </div>
      </div>
      <p className={styled.footer}>Men</p>
      <OptFooter/>
      <Footer/>
    </div>
  );
}
