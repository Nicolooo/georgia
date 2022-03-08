import React from 'react'
import Count from './count'
const Stats = ({tt}) => {
  return (
    <div className="mega">
    <div className="stats rowa">
        {tt.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
    </div>
  )
}

export default Stats