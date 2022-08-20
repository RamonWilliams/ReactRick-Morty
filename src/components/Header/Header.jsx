import React from 'react'
import "./Header.css"
import logo from "../../assets/images.jpg"


const Header = ({setShowCharacter, setShowEpisodes}) => {
  return (
    <header> 
      <div className='header'>
        <img src={logo}alt=""/>
        
        <ul>
            <li><a href="">Home</a> </li>
            <li onClick={()=>setShowCharacter(true) & setShowEpisodes(false)}> Characters</li>
            <li onClick={()=>setShowEpisodes(true) & setShowCharacter(false)}> Episodes </li>
            
        </ul>
        </div>
        </header>

  )
}

export default Header