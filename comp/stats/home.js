import React from 'react'
import Count from './count'
const Stats = ({tt}) => {
  return (
    <div className="stats-wrapper">
        {tt.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
  )
}

export default Stats