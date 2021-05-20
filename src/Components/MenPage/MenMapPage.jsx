import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import styled from "./MenMapPage.module.css";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import OptFooter from "../Option_div_footer/OptFooter";
import { getData } from '../../Redux/All/action';
export const MenMapPage = () => {
  // const { data } = useSelector((state) => state.men, shallowEqual);
  // const dispatch = useDispatch();
  const { dataall } = useSelector((state) => state.all, shallowEqual);
  const dispatch = useDispatch();
  console.log(dataall);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styled.main}>

        {dataall && dataall.map((el) => {
          return (
            <div className={styled.map}>
              <div
                className={styled.url}
                style={{ backgroundImage: `url( ${el.url})` }}
              >
                <div className={styled.inlineText}>
                  <div>Add size</div>
                  <div>
                    {" "}
             S&nbsp;&nbsp;&nbsp; M&nbsp;&nbsp;&nbsp; L&nbsp;&nbsp; &nbsp;
             XL &nbsp;&nbsp;&nbsp; XXL{" "}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "95%",

                  marginTop: "10px",
                }}
              >
                <div>{el.brand}</div>
                <div>
                  <FavoriteBorderIcon color="primary" />
                </div>
              </div>
              <div>Rs.{el.price}</div>
              <div>
                {el.color}
                {`${el.color}` > 1 ? " colours" : " colour"}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{clear:"both"}}></div>
       <OptFooter/>
      <Footer />
    </div>
  );
};
