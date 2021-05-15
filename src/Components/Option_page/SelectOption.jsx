import React from 'react'
import styled from "./SelectOption.module.css"
const SelectOption = () => {
  return (
    <div>
      <div className={styled.div}>
          <div className={styled.img1}>
           <button>Women</button>
          </div>
          <div className={styled.img2}>
          <button>Men</button>
          </div>
      </div>
      <div className={styled.div}>
          <div className={styled.img3}>
           <h1>Dear planet,we are Committed</h1>
           <p>79% of our garments already have <br/>sustainable properties.<br/> By 2022, it will be 100%​.</p>
          </div>
          <div className={styled.img4}>
          <button>Kids</button>
          </div>
      </div>
      <div className={styled.div}>
          <div className={styled.img5}>
          <button>Plus Size</button>
          </div>
    
      </div>
    </div>
  )
}

export default SelectOption
