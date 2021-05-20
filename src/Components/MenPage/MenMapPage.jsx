import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Men/action";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import styled from "./MenMapPage.module.css";
export const MenMapPage = () => {
  const { data } = useSelector((state) => state.men, shallowEqual);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className={styled.main}>
      {data.map((el) => {
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
  );
};
