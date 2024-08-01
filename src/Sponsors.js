import React, { Children } from 'react'
import { useState, useEffect, useRef } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaFaceSmile, FaFaceLaugh, FaFaceGrinHearts, FaFaceMeh } from 'react-icons/fa6'
import { useContext } from 'react'
import DataContext from './Context/DataContext'

const Sponsors = () => {
    const { width } = useContext(DataContext);
    const [sponsor, setSponsor] = useState([
        {
            id: 1,
            name: "spon1",
            imgLink: <FaInstagram />,
            style: {
                color : 'pink'
            }
                    
        },
        {
            id: 2,
            name: "spon2",
            imgLink : <FaFacebook />,
            style: {
                color: 'blue'

            }
        },
        {
            id: 3,
            name: "spon3",
           imgLink : <FaTwitter />,
           style: {
                color: 'black'
            }
        },
        {
            id: 4,
            name: "spon4",
            imgLink : <FaFaceSmile />,
            style: {
                color: 'yellow'

            }
        },
        {
            id: 5,
            name: "spon5",
            imgLink : <FaFaceLaugh />,
            style: {
                color: 'orange'

            }
        },
        {
            id: 6,
            name: "spon6",
            imgLink : <FaFaceGrinHearts />,
            style: {
                color: 'green'
            }
        }
    ])
    const sponItemRef = useRef(null);

    useEffect(() => {
        const childSponItem = sponItemRef.current;
        const childSponItemWidth =  childSponItem.scrollWidth / (sponsor.length);
        const scrollInterval = setInterval(() => {
          if (childSponItem.scrollLeft + childSponItem.clientWidth >= childSponItem.scrollWidth) {
            childSponItem.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } else {
            childSponItem.scrollBy({
              top: 0,
              left: childSponItemWidth,
              behavior: 'smooth',
            });
          }
        }, 2000); 
        return () => clearInterval(scrollInterval);
      }, [width]);


  return (
    <div className='Sponsors'>
     <div  className={width> 992 ? "sponsorshead w-full": "sponsorshead w-small"}>
        <span>Our sponsors</span>
     </div>
     <div className={width> 992 ? "sponsorlist w-full": "sponsorlist w-small"} ref={sponItemRef}>
      {sponsor.map(item => (
        <div className="child" key={item.id}>
            <div className={width> 992 ? "sponsor w-full": "sponsor w-small"}>
                <span style={item.style}>
                    {item.imgLink}
                </span>
            </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Sponsors
