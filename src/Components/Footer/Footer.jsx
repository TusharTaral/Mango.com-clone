import React from 'react'
import styled from "./Footer.module.css"
const Footer = () => {
  return (
    <div>
    <div className={styled.div}>
      <p>Receive exclusive promotions, private sales and news</p>
      <input type="text" placeholder="Enter your e-mail" />
      <br />
      <button>Subscribe</button>
      <div className={styled.div2}>
        <div>
          <img src="https://image.flaticon.com/icons/png/128/1383/1383676.png" alt="" />
        </div>
  
          <h5>USA |</h5>
          <p>English (USA)</p>
      </div>
    </div>
    <div className={styled.div3}>
           <div>Help</div>
           <div>Orders</div>
           <div>Returns</div>
           <div>Stores</div>
           <div>Apps</div>
           <div>Company</div>
           <div>Franchises</div>
           <div>Affiliate</div>
    </div>
    <div className={styled.div4}>
           <div>Work for Mango</div>
           <div>Press</div>
           <div>Mango Outlet</div>
           <div>Site Map</div>
    </div>
    <div className={styled.div5}>
        <div>
        <img src="https://t4.ftcdn.net/jpg/02/97/46/91/240_F_297469193_ee9n6asShENUNS3MAos61qdz6zYf6Tcb.jpg" alt="facebook"/>
        </div>
        <div>
        <img src="https://t3.ftcdn.net/jpg/03/14/14/74/240_F_314147401_diYSe0pDNpD8M4SlnKCCJaz2LxJuzpgT.jpg" alt="twitter"/>
        </div>
        <div>
        <img src="https://t3.ftcdn.net/jpg/03/00/02/08/240_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg" alt="instagram"/>
        </div>
        <div>
        <img src="https://t4.ftcdn.net/jpg/02/97/46/91/240_F_297469172_ZOw7d0dlN2OJ6VHERucB4R51M3jiqgUG.jpg" alt="pinterest"/>
        </div>
        <div>
        <img src="https://t4.ftcdn.net/jpg/03/02/05/95/240_F_302059580_PgHn3mWKquUYPEc5NAPS0Q81frK6Y0in.jpg" alt="spotify"/>
        </div>
        <div>
        <img src="https://t3.ftcdn.net/jpg/02/10/49/76/240_F_210497687_PuSLziXyvfwLocBCbp2Enw7uGOFvkIp0.jpg" alt="youtube"/>
        </div>
        <div>
        <img src="https://t3.ftcdn.net/jpg/03/77/37/20/240_F_377372045_cOweNY6mhowyvmt8vd88o162EQE4tA9L.jpg" alt="foursquare"/>
        </div>
    </div>
    <div className={styled.div6}>
      <p>© 2021 MANGO All rights reserved Privacy Policy | Terms & Conditions | ADA</p>
    </div>
    </div>

  )
}

export default Footer
