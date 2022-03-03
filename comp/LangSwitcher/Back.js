import React from 'react'
const Back = ({title,link}) => {
  const lia = 'https://georgianliberty.com/'+ link;
  return (
      <>
    <a className="News-goback" href={lia}>
      <div className="News-conmt">
        {title}
        </div>
    </a>
    </>
  )
}

export default Back