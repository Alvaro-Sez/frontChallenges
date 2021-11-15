import React from 'react'
import {
  SelectedComputerContainer,
  TitleComputer,
  EmptyComputerSelection,
  RockSelected,
  ScissorsSelected,
  PaperSelected,
} from './style'

export default function SelectedComputerComponent({computerChoice, winner}){
  return(
    <>
      <SelectedComputerContainer>
        <TitleComputer>THE HOUSE PICKED</TitleComputer>
        <EmptyComputerSelection selectedComputer={typeof computerChoice =='number'? true: false}></EmptyComputerSelection>
        <RockSelected selectedComputer={computerChoice === 0? true: false} loser={winner === 0? true: false}></RockSelected>
        <ScissorsSelected selectedComputer={computerChoice === 1? true: false} loser={winner === 0? true: false}></ScissorsSelected>
        <PaperSelected selectedComputer={computerChoice === 2? true: false} loser={winner === 0? true: false}></PaperSelected>
      </SelectedComputerContainer>
    </>
  )
}