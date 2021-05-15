import React from 'react'
import styled from "./FrontPage.module.css"
const FrontPage = () => {
    return (
        <div className={styled.div}>
            <div className={styled.div1}>
                <img className={styled.img} src="https://st.mngbcn.com/images/headerNew/logos/mango.svg" alt="logo" />
                
            </div>
            <div className={styled.div2}>
                 <p>Come on in and discover the latest fashion trends</p>
                 <button style={{marginTop:"50px"}}>
                     <img className={styled.img1} src="https://image.flaticon.com/icons/png/128/3033/3033144.png" alt=""/>
                     India</button>
                 <button>Enter</button>
            </div>
            
        </div>
    )
}

export default FrontPage
