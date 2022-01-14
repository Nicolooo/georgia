import React from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import Slides from '../../data/Slides';

const Modal = ({setIsOpen}) => {
    return (
    <>
      <div className="modal-darkBG" onClick={() => setIsOpen(false)} />
        <div className="modal-centered">
          <div className="modal">          
      <Swiper spaceBetween={50} slidesPerView={1} height="100%" className="mySwiper">
      {Slides.map((slide) => (
                 <SwiperSlide key={slide.id} >
                 <div className="modal-left">
                         <h2>{slide.name}</h2>
                         <p>gandoi</p>
                         
                           </div>
                         <div className="modal-right">
                           <h2>{}</h2>
                           </div>
                     <div className="modalActions">
                       <div className="actionsContainer">      
                       </div>
                     </div>
                   <button className="deleteBtn" onClick={()=>setIsOpen(false)}>
                           Close
                   </button>   
                 </SwiperSlide>
        ))}
        </Swiper>
          </div>
        </div>
     
      </>
    )
}
export default Modal
