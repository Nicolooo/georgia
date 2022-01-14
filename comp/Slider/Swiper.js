import React from 'react'
import { SwiperSlide } from 'swiper/react'
import "swiper/css";
const SlideContent = ({title,text}) => {
    return (
        <SwiperSlide>
        <div className="modal-left">
                <h2>{title}</h2>
                <p>asd</p>
                
                  </div>
                <div className="modal-right">
                  <h2>{text}</h2>
                  </div>
            <div className="modalActions">
              <div className="actionsContainer">      
              </div>
            </div>
          <button className="deleteBtn" onClick={()=>setIsOpen(false)}>
                  Close
          </button>   
          </SwiperSlide>
    )
}

export default SlideContent
