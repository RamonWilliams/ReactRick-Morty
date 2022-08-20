
import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import CharacterCard from '../CharacterCard/CharacterCard'
import "./Character.css"

const Character = () => {
  const [characterList, setCharacterList] = useState([]);
const getCharacter = async () =>{
  const rowData = await axios.get("https://rickandmortyapi.com/api/character")
  console.log(rowData)
  setCharacterList(rowData.data.results)
  }    

  useEffect(()=>{
      getCharacter()
  },[])
  return (
    <figure>
        
        {characterList.length>0?characterList.map((character)=><CharacterCard characterInfo={character} key={character.id} />):<p>Loading page...</p>}
    </figure>
  )
}

export default Character