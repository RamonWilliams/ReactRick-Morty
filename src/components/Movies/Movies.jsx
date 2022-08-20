import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import "./Movies.css"
import Episode from '../EpisodeCard/Episode'




const Episodes = () => {

    const [episodeList, setEpisodeList] = useState([])
    const getEpisode = async () =>{
        const rawData = await axios.get("https://rickandmortyapi.com/api/episode")
        console.log(rawData)
        setEpisodeList(rawData.data.results)
        
    }
    useEffect(()=>{
    getEpisode()
    },[])

  return (
    
    <div className='mainEpisode'>
          {episodeList.length>0?episodeList.map((episode)=> <Episode episodeInfo={episode} key={episode.id}  /> ):(<p>Loading page</p>)}
    </div>
  )
}

export default Episodes