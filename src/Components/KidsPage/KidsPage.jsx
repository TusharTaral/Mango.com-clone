import React from "react";
import styled from "./KidsPage.module.css";
export default function KidsPage() {
  return (
    <div>
      <div className={styled.top}>
        <h1>
          ANOTHER SUMMER <br /> TO ENJOY
        </h1>

        <button>Discover more</button>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.leisure}>
          <h1>New now</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.linen}>
          <h1>Ready for the Summer</h1>
          <button>Discover more</button>
        </div>
      </div>

      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.boy}>
          <h1>Girl</h1>
          <p>From 4 to 14 years</p>
          <button>Discover more</button>
        </div>
        <div className={styled.boy1}>
          <h1>Boy</h1>
          <p>From 4 to 14 years</p>
          <button>Discover more</button>
        </div>
        <div className={styled.boy2}>
          <h1>Teenage Girl</h1>
          <p>From 140 to 171 cm</p>
          <button>Discover more</button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.babyboy}>
          <h1>Baby Girl</h1>
          <p>From 0 to 4 years</p>
          <button>Discover more</button>
        </div>
        <div className={styled.babyboy1}>
          <h1>Baby Boy</h1>
          <p>From 0 to 4 years</p>
          <button>Discover more</button>
        </div>
        <div className={styled.babyboy2}>
          <h1>Newborn</h1>
          <p>From 0 to 12 months</p>
          <button>Discover more</button>
        </div>
      </div>

      <div style={{ display: "flex", margin: "3px 0px" }}>
        <div className={styled.shirt}>
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
        <div className={styled.shirt1}>
          <h1> T-shirts</h1>
          <button>Discover more</button>
        </div>
        <div className={styled.shirt2}>
          <h1>T-shirts</h1>
          <button>Discover more</button>
        </div>
      </div>
    </div>
  );
}
