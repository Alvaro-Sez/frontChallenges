import React, {useState, useEffect} from 'react'
import {
  TriangleContainer,
  GameContent, 
  Panel,
  Marcador,
  Rock,
  Scissors,
  Paper,
  BtnContainer,
  RulesBtn,
  RockSelected,
  ScissorsSelected,
  PaperSelected,
  SelectedContainer,
  PlayingContainer,
  TitlePlayer,
  TitleGame,
  ScoreContainer,
} from './style'

import VeredictComponent from './Veredict'
import SelectedComputerComponent from './ComputerSelection'
import Modal from './Modal'


function Game () {
  const [playing,setPlaying] = useState(false)
  const [choice, setChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [marcador, setMarcador] = useState(0)
  const [showRules, setShowRules] = useState(false)
  const [winner, setWinner] = useState(null)


  const reset = () =>{
    setPlaying(false)
    setChoice(null)
    setComputerChoice(null)
    setWinner(null)
  }
  /* game logic */ 
  useEffect(()=>{
    if(choice || choice === 0){
      setTimeout(()=>{
        setComputerChoice(Math.floor(Math.random() * 3))
      },700)
    }
  },[choice])

  /* eventHandlers */
  const handleRock = () =>{
    setPlaying(true)
    setChoice(0)
  }

  const handleScissors = () =>{
    setPlaying(true)
    setChoice(1)
  }

  const handlePaper = () =>{
    setPlaying(true)
    setChoice(2)
  }
  
  return (
    <>
    <Panel>
      <Marcador>
        <TitleGame>ROCK PAPER SCISSORS</TitleGame>
        <ScoreContainer>
          <h1>SCORE</h1>
          <p>{marcador}</p>
        </ScoreContainer>
      </Marcador>
    </Panel>
    <GameContent>
      <TriangleContainer active={!playing}>
        <Rock onClick={handleRock}></Rock>
        <Scissors onClick={handleScissors}></Scissors>
        <Paper onClick={handlePaper}></Paper>
      </TriangleContainer>
      {/* despues de elegir */}
    <PlayingContainer active={playing}>

      <SelectedContainer>
        <TitlePlayer>YOU PICKED</TitlePlayer>
        <RockSelected selected={choice === 0? true: false} winner={winner === 1? true: false}></RockSelected>
        <ScissorsSelected selected={choice === 1? true: false} winner={winner === 1? true: false}></ScissorsSelected>
        <PaperSelected selected={choice === 2? true: false} winner={winner === 1? true: false}></PaperSelected>
      </SelectedContainer>

      <VeredictComponent 
      computer={computerChoice} 
      player={choice} 
      setMarcador={setMarcador} 
      marcador={marcador} 
      reset={reset}
      winner={winner}
      setWinner={setWinner}/>

      <SelectedComputerComponent 
      computerChoice={computerChoice}
      winner={winner} />
      
    </PlayingContainer>
    </GameContent>

    <BtnContainer>
      <RulesBtn onClick={() => showRules? setShowRules(false): setShowRules(true)}>RULES</RulesBtn>
    </BtnContainer>

    {showRules && <Modal setShowRules={setShowRules} showRules={showRules}></Modal>}
    </>
  )
}

export default Game;