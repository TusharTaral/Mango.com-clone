import React from "react";
import styled from "./WomenPage.module.css";
export default function WomenPage() {
  return (
    <div>
      <div className={styled.top}>
        <h1>LIVING BLUE</h1>

        <button> Discover more </button>
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
    </div>
  );
}
