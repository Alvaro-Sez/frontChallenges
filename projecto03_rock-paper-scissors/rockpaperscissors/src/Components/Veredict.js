/* eslint-disable */
import React, {useEffect, useState} from 'react'
import {
  VeredictContainer,
  YouWon,
  PlayAgain,
  YouLost,
  Draw
} from './style'
export default function VeredictComponent ({computer,player,setMarcador,marcador,reset,setWinner}) {
  const [veredict, setVeredict] = useState(null)

  useEffect(()=>{
    const judgeGame = () =>{
      if(typeof computer == 'number'){
        switch (true){
          case (player === computer):
            setVeredict('draw')
            break
          case (player === 0 && computer === 1):
            setVeredict('win')
            setMarcador(marcador + 1)
            setWinner(1)
            break
          case (player === 1 && computer === 2):
            setVeredict('win')
            setMarcador(marcador + 1)
            setWinner(1)
            break
          case (player === 2 && computer === 0):
            setVeredict('win')
            setMarcador(marcador + 1)
            setWinner(1)
            break
          default:
            setVeredict('lose')
            setMarcador(marcador - 1)
            setWinner(0)
            break
        }
      }
    }
  setTimeout(()=>judgeGame(),1000)
  },[computer,player,setWinner])

  const handleReset = () => {
    setVeredict(null)
    reset()
  }
  return(
    <>
      <VeredictContainer active={veredict}>
        <YouWon active={veredict === 'win'? true: false}>
          <h1>YOU WIN</h1>
          <PlayAgain onClick={handleReset}>PLAY AGAIN</PlayAgain>
        </YouWon>
        <YouLost active={veredict === 'lose'? true: false}>
          <h1>YOU LOSE</h1>
          <PlayAgain onClick={handleReset}>PLAY AGAIN</PlayAgain>
        </YouLost>
        <Draw active={veredict === 'draw'? true: false}>
          <h1>IT'S A TIE</h1>
          <PlayAgain onClick={handleReset}>PLAY AGAIN</PlayAgain>
        </Draw>
      </VeredictContainer>
    </>
  )
}

