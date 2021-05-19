import React from 'react'
import styled from "./OptFooter.module.css"
const OptFooter = () => {
  return (
    <div>
      <div className={styled.div}>
         <p>Women</p>
         <div className={styled.flex}>
             <div className={styled.div1}>
                 <p>CLOTHING</p>
                 <div>Dress and Jumpsuits</div>
                 <div>Shirts</div>
                 <div>T-shirt</div>
                 <div>Sweatshirts</div>
                 <div>Coats</div>
             </div>
             <div className={styled.div1}>
                 <p>ACCESSORIES</p>
                 <div>Shoes</div>
                 <div>Bags</div>
                 <div>Jewelary</div>
                 <div>Wallets</div>
                 <div>Belt</div>
             </div>
         </div>
         <div className={styled.flex}>
             <div className={styled.div2}>
                 <div>Shorts</div>
                 <div>Bikins</div>
                 <div>Sports wear</div>
                 <div>Underwear</div>
                 <div>Pajamas</div>
                 <div>Pants</div>
             </div>
             <div className={styled.div3}>
                 <div>Hat</div>
                 <div>Facemask</div>
                 <div>Cases</div>
             </div>
         </div>
      </div>
        
    </div>
  )
}

export default OptFooter
