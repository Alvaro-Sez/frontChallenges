import React from 'react'
import {
  RulesModal,
  RulesContainer,
  TitleRules,
  CloseIcon,
  RulesImg
} from './style'


const Modal = ({setShowRules, showRules}) => (
  <RulesModal active={showRules}>  
  <RulesContainer>
    <TitleRules>
    <h1>RULES</h1>
    <CloseIcon onClick={() => setShowRules(false)}></CloseIcon>
    </TitleRules>
    <RulesImg></RulesImg>
  </RulesContainer>
  </RulesModal>
)

export default Modal