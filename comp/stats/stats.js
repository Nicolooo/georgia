import React from 'react'
import Count from '../../comp/Abk/counter'
const Stats = ({tt}) => {
  return (
    <div className="ll">
    <div className="stats row">
        {tt.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
    </div>
  )
}

export default Stats