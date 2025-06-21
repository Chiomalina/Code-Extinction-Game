import { useState } from 'react'
import clsx from "clsx"
import './App.css'
import Header from "./Components/Header"
import { languages } from './Components/languages'

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])
  console.log(guessedLetters)


  const alphabet = "abcdefghijklmnopqrstuvwsyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters => [...prevLetters, letter])
  }

  // 🔥 derive wrong guesses dynamically
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)


  const letterElement = currentWord.split("").map((letter, index) => (
    <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
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

    const keyboardElements = alphabet.split("").map((letter, index) => {
      const isGuessed = guessedLetters.includes(letter)
      const isCorrect = isGuessed && currentWord.includes(letter)
      const isWrong = isGuessed && !currentWord.includes(letter)
      const className = clsx({
        correct : isCorrect,
        wrong : isWrong
      })

      return (
          <button 
            className={className}
            key={index} 
            onClick={() => addGuessedLetter(letter)}
          >
            {letter.toUpperCase()}
        </button>
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

      <section className="keyboard">
        {keyboardElements}
      </section>

      <section className="new-game">New Game</section>

    </>
  )
}

export default App
