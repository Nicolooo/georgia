import React,{useState} from 'react'
import { ArrowLeft, ArrowRight} from "react-feather";
import Arr from '../../data/s'

const Modal = ({setIsOpen}) => {
    const [value,setValue] = useState(0);
    

    return (
    <>
      <div className="modal-darkBG" onClick={() => setIsOpen(false)} />
        <div className="modal-centered">
          <div className="modal" style={{backgroundImage: `url(${Arr[value].image})`}}>          
            <div className='slider-container'>
              {/*  Ukan  */}
              {/*  Main heading */}
              <div className="modal-content-left">
                <h2 className="slider-title">{Arr[value].title}</h2>
                {/*  Sub heading */} 
                <h3>{Arr[value].text}</h3>
                {/* short desc */}
              </div>
              <div className="modal-content-right">
                <p>{Arr[value].desc}</p>
              </div> 
              {/* link call to action  */}
            </div>
            <div className="slider-arrows">
              <button className="slider-button" type="button" onClick={() => value === 0 ? setValue(5) : setValue(value - 1)}><ArrowLeft /></button>
              <button className="slider-button" type="button" onClick={() => value === 5 ? setValue(0) : setValue(value + 1)}><ArrowRight /></button>
            </div>
          </div>
        </div>
     
      </>
    )
}
export default Modal
