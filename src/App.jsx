
import Character from"../src/components/Characters/Character"
import Header from "../src/components/Header/Header"
import './App.css'
import Episodes from "./components/Movies/Movies"
import { useState } from "react"




const App = ()=> {
   const [showCharacters, setShowCharacter] = useState(false);
   const [showEpisodes, setShowEpisodes] = useState (false)

  return (
    <div className="App">
      <Header setShowCharacter = {setShowCharacter} setShowEpisodes = {setShowEpisodes}/>
      {showCharacters?<Character />:null}
      {showEpisodes? <Episodes />:null}
      
   
          </div>
  )
}

export default App
