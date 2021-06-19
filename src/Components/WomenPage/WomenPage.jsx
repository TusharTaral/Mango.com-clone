import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OptFooter from "../Option_div_footer/OptFooter";
import styled from "./WomenPage.module.css";
export default function WomenPage() {
  return (
    <div>
      <Navbar />
      <div className={styled.top}>
        <video className={styled.video} autoPlay loop muted>
          <source
            src="http://staticpages.mngbcn.com/homes/images/ss21/she/mayo/cover_5s_desktop_landing_v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className={styled.h1cont}>CHUFY x MANGO</h1>
        {/* <h3 className={styled.h1cont}>
          Boho dresses to carry the Mediterranean <br /> summer with you.
        </h3> */}
        <button className={styled.disBtn}> Discover more </button>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.shirt}>
          <h1>Key Trends</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.shirt1}>
          <h1>
            Accessories <br /> Edition
          </h1>
          <button>Discover more</button>
        </div>
        <div className={styled.shirt2}>
          <h1>Swimwear 2021</h1>
          <button>Discover more</button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.womenlinen}>
          <h1>Linen Collection</h1>

          <button>Discover more</button>
        </div>
        <div className={styled.womenlinen1}>
          <h1>Online Exclusive</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.womenlinen2}>
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
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.dress}>
          <h1>
            Dress and <br />
            Jumpsuits
          </h1>
          <button>Discover more</button>
        </div>
        <div className={styled.dress1}>
          <h1>Short</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.dress2}>
          <h1>Bags</h1>
          <button>Discover more</button>
        </div>
      </div>
      <div className={styled.mangogirls}>
        <p>#MANGOGIRLS</p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styled.girls}></div>
        <div className={styled.girls1}></div>
        <div className={styled.girls2}></div>
        <div className={styled.girls3}></div>
      </div>
      <div className={styled.btn}>
        <button>Discover more</button>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "50px ", fontWeight: "400" }}>Our Other Lines</h1>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.otherline}>
          <button className={styled.btn1}>Men</button>
        </div>
        <div className={styled.otherline1}>
          <button className={styled.btn1}>Kids</button>
        </div>
        <div className={styled.otherline2}>
          <button className={styled.btn1}>Plus size</button>
        </div>
      </div>
      <p className={styled.footer}>Women</p>
      <OptFooter />
      <Footer />
    </div>
  );
}
