import React from 'react'
import "./CharcterCard.css"

const CharacterCard = ({characterInfo}) => {
  return (
    <div className='info'>
     <h2>Nombre: {characterInfo.name}</h2>
     <h3> Género: {characterInfo.gender}</h3>
     <p><bold>Especie: {characterInfo.species}</bold></p>
     <p>Status: {characterInfo.status}</p>



     <img src={characterInfo.image} alt={characterInfo.name} />

    </div>
  )
}

export default CharacterCard