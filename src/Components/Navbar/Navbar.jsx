import React from 'react'
import styled from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styled.flex}>
    <div className={styled.div1}>
    <img className={styled.img} src="https://st.mngbcn.com/images/headerNew/logos/mango.svg" alt="logo"/>
    </div>
    <div className={styled.div}>
        <div>New</div>
    </div>
    <div className={styled.div}>
        <div>Women</div>
    </div>
    <div className={styled.div}>
        <div>Men</div>
    </div>
    <div className={styled.div}>
        <div>Kids</div>
    </div>
    <div className={styled.div}>
        <div>Plus Size</div>
    </div>
    <div className={styled.div}>
        <img src="https://t4.ftcdn.net/jpg/01/09/46/77/240_F_109467785_eeYWH2tY4CnkDl9BtuYO6hWjk7hH0okU.jpg" alt="search icon"/>
        <p>Search</p>
    </div>
    <div className={styled.div}>
         <img src="https://img-premium.flaticon.com/png/512/748/748128.png?token=exp=1621107318~hmac=52aed5f7524edf34d49271bbfc5efb46" alt="sign up icon"/>
         <p>Sign In</p>
    </div>
    <div className={styled.div}>
        <img src="https://image.flaticon.com/icons/png/128/1077/1077035.png" alt="search icon"/>
        <p>Wishlist</p>
    </div>
    <div className={styled.div}>
        <img src="https://image.flaticon.com/icons/png/128/590/590506.png" alt="search icon"/>
        <p>Shopping Bag</p>
    </div>
   </div>
  )
}

export default Navbar
