import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import { languages } from './Components/languages'

function App() {
  const [currentWord, setCurrentWord] = useState("react")

  const letterElement = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toLocaleUpperCase()}</span>
  ))



  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color:lang.color
    }
      return (
          <span 
            key={lang.name} 
            className="chip" 
            style={styles}>{lang.name}
          </span>
      )
    })

  return (
    <>
      <Header
        title="Assembly Endgame"
        description="Guess the word within 8 attempts to keep the programming world safe from Assembly!"
      />

      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>

      <section className="language-chips">
          {languageElements}
      </section>

      <section className="word">
        {letterElement}
      </section>
    </>
  )
}

export default App
