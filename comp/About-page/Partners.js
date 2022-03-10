import React from 'react'
import Image from 'next/image'
const Partners = ({look}) => {
  return (
    <div className="nn">
        <h3 className="part-title">{look}</h3>
        <div className="part-wrapper">
                <div className="part-col">
                    <Image src="/partners/parliament.webp" height="200" width="200" />
                </div>    
                <div className="part-col">
                    <Image src="/partners/youth.webp" height="200" width="200" />
                </div>    
                <div className="part-col">
                    <Image src={"/partners/logo-fb-en.png"} height="200" width="400" />
                </div>    
        </div>
    </div>
  )
}

export default Partners