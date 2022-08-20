import React from 'react'
import "./Episode.css"

const Episode = ({episodeInfo}) => {
  return (
    <div className='episode'>
     <h2>{episodeInfo.id}</h2>
     <h3>{episodeInfo.episode}</h3>
     <h3>{episodeInfo.name}</h3>
     <p>{episodeInfo.air_date}</p>

    </div>
  )
}

export default Episode