import React from 'react'
import { useContext } from 'react'
import DataContext from './Context/DataContext';
import logo  from './media/logo/GDSC (1).png'

const OurInfo = () => {
  const {width} = useContext(DataContext)   
  return (
    <div className='OurInfo'>
      <div  className={width > 992 ? 'leftInfodiv w-full' : 'leftInfodiv w-small'}>
        <div className="leftinfotop">
            <div className="logopic">
                <img src={logo} alt="" />
            </div>
            <div className="clubtile">Google Developer student club</div>
        </div>
        <div className="leftinfobottom">
            <span>gdsc.cuiet@chitkara.edu.in</span>
        </div>
        <div className="leftinfobottom">
            <span>Chandigarh-Patiala National Highway (NH-64), Village Jhansla, Rajpura, Punjab 140401</span>
        </div>
      </div>
      <div  className={width > 992 ? "rightInfodiv w-full" : "rightInfodiv w-small"}>
        <div className="rightlabel"><span>Contact Information</span></div>
        <div className="rightlabel2">We are open for any suggestion or just to have a chat</div>
        <div className="headlabels"><span>Club Head : XYZ</span></div>
        <div className="rightlabel2">+91 89000000</div>
        <div className="headlabels"><span>Club Co-Head : XYZ</span></div>
        <div className="rightlabel2">91 98000000</div>
      </div>
    </div>
  )
}

export default OurInfo
