import React from 'react'
import { Link } from 'react-router-dom'
import styled from "./SelectOption.module.css"
const SelectOption = () => {
  return (
    <div>
      <div className={styled.div}>
          <div className={styled.img1}>
          <Link to="/women"> <button className={styled.btn1}>Women</button></Link>
          </div>
          <div className={styled.img2}>
         <Link to="/men"><button className={styled.btn2}>Men</button></Link> 
          </div>
      </div>
      <div className={styled.div}>
          <div className={styled.img3}>
           <h1>Dear planet,we are Committed</h1>
           <p>79% of our garments already have <br/>sustainable properties.<br/> By 2022, it will be 100%​.</p>
          </div>
          <div className={styled.img4}>
         <Link to="/kids"><button className={styled.btn4}>Kids</button></Link> 
          </div>
      </div>
      <div className={styled.div}>
          <div className={styled.img5}>
          <Link to="/plus"><button className={styled.btn5}>Plus Size</button></Link>
          </div>
    
      </div>
    </div>
  )
}

export default SelectOption
