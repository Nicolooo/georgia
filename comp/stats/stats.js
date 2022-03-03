import React from 'react'
import Count from '../../comp/Abk/counter'
const Stats = ({title,tt}) => {
  return (
      <div className="ll">
      <h3 className="stats-title">{title}</h3>
    <div className="stats row">
        {tt.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
    </div>
  )
}

export default Stats