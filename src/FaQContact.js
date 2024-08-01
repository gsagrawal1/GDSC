import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { useState, useEffect, useRef, useContext } from 'react'
import DataContext from './Context/DataContext';

const FaQContact = () => {
    const {width} = useContext(DataContext)
    const [faqItems, setFaqItems] = useState(
        [
            {     
                "id" : 1,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : true,
                "faqans" : "Answer to the question"
              
            },
            {     
                "id" : 2,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : false,
                "faqans" : "Answer to the question"
              
            },
            {     
                "id" : 3,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : false,
                "faqans" : "Answer to the question"
              
            },
            {     
                "id" : 4,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : false,
                "faqans" : "Answer to the question"
            },
            {     
                "id" : 5,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : false,
                "faqans" : "Answer to the question"
              
            },
            {     
                "id" : 6,
                "faqquest" : "How to Join Google Developer Student club?",
                "isSelect" : false,
                "faqans" : "Answer to the question"
              
            }
        ]
    );
    const handleFaqClick = (id) =>{
        const filterFaq = faqItems.map((item) => item.id === id ? {...item, isSelect: !item.isSelect}: {...item, isSelect: false} )
        setFaqItems(filterFaq)
    }
    const downIconRef = useRef({});
    useEffect(()=>{
        faqItems.forEach((item)=>{
            const iconDiv = downIconRef.current[item.id];
        if(iconDiv){
            if(item.isSelect){
                iconDiv.classList.add("active");
            }
            else{
                iconDiv.classList.remove("active");
            }
        }
        })
    },[faqItems])

  return (
    <div className='FaQContact'>
      <div  className={width > 992 ? "faqdiv w-full" : "faqdiv w-small"}>
      <div className="faqTitle"><span>FAQ's</span></div>
       {faqItems.map(item => (
        <div className="faqsbar" key={item.id} onClick={() => handleFaqClick(item.id)} style={item.isSelect ? {backgroundColor: 'inherit'}: null}>
            <div className="faqQuest">
                <div className="faqQuestTitle">{item.faqquest}</div>
                
                <div className="arrowicon" ref={(e) => (downIconRef.current[item.id]=e)}>
                <FaAngleDown />
                </div>
            </div>
            {item.isSelect &&
            <div className="faqAns">{item.faqans}</div>
        }
        </div>
    )) }
      </div>
      <div  className={width > 992 ? "contactdiv w-full" : "contactdiv w-small"}>
      <div className="faqTitle"><span>Write Us</span></div>
        <form action="" id='contactForm'>
            <label htmlFor="fillername"></label>
            <input type="text" placeholder='Name' id='fillername'/>
            <label htmlFor="filleremail"></label>
            <input type="text" placeholder='Email Address'  id='filleremail'/>
            <label htmlFor="fillernumber"></label>
            <input type="text" placeholder='Contact Number'  id='fillernumber'/>
            <label htmlFor="message"></label>
            <textarea name="" id="message" placeholder='Message' rows={3} ></textarea>
            <button type='submit' id='contactformsubmit' disabled>Send</button>
        </form>
      </div>
    </div>
  )
}

export default FaQContact
