import React from 'react'
import { useContext } from 'react'
import DataContext from './Context/DataContext'
import img from './media/images/Lovepik_com-401639229-happy-overtime-programmer.png'
import chatBgImg from './media/images/green-speech-bubble-icon-isolated_53876-71269 Background Removed.png'

const Describe = () => {
    const {width} = useContext(DataContext);
  return (
    <div className={width > 992 ? 'Describe w-full' : 'Describe w-small'}>
      <div className={width > 992 ? 'describeLeft w-full' : 'describeLeft w-small'}>
        <img src={img} alt="" />
      </div>
      <div  className={width > 992 ? 'describeRight w-full' : 'describeRight w-small'}>
        <div className="describeRightLabel"><span>What we provide to you <span style={width > 992 ? {color:'red', fontSize: '40px'} : {color:'red', fontSize: '30px'}}>?</span></span></div>
        <div className="describeChatBoxes">
            <div className="chatboxes" >
                <div className="chatboxcontent"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Content 1</span></div>
            </div>
            <div className="chatboxes" >
                <div className="chatboxcontent"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Content 2</span></div>
            </div>
            <div className="chatboxes" >
                <div className="chatboxcontent"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Content 3</span></div>
            </div>
            <div className="chatboxes" >
                <div className="chatboxcontent"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Content 4</span></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Describe
