import React from 'react'
import Image from 'next/image'
const Partners = ({she,look}) => {
  return (
    <div>
        <h3 className="part-title">{look}</h3>
        <div className="part-wrapper">
                <div className="part-col">
                    <Image src="/partners/parliament.webp" height="200" width="200" />
                </div>    
                <div className="part-col">
                    <Image src="/partners/youth.webp" height="200" width="200" />
                </div>    
                <div className="part-col">
                    <Image src={"/partners/lib-"+she+".webp"} height="90" width="200" />
                </div>    
        </div>
    </div>
  )
}

export default Partners