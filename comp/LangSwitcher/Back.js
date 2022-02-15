import React from 'react'
const Back = ({title,link}) => {
  const lia = 'https://georgianliberty/'+ link + '/news';
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