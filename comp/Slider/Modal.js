import React from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideContent from '../../comp/Slider/Swiper';
const Modal = ({setIsOpen}) => {
  const json = {"name":"John", "age":30, "car":null}
    return (
    <>
      <div className="modal-darkBG" onClick={() => setIsOpen(false)} />
        <div className="modal-centered">
          <div className="modal">          
      <Swiper spaceBetween={50} slidesPerView={1} height="100%" className="mySwiper">
      {Object.entries(json).map(([key, val], i) => (
         <SwiperSlide key={i}>
         <div className="modal-left">
                 <h2>{val}</h2>
                 <p>gandoi</p>
                 
                   </div>
                 <div className="modal-right">
                   <h2>{val}</h2>
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
