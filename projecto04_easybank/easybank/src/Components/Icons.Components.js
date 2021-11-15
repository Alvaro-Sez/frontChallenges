import {IconContainer, CardContainer} from './styles'



export const CardSection2 = function({img,h1Text,pText}){
  return(
    <IconContainer>
      <div style={{backgroundImage:`url(${img})`}}></div>
      <h1>{h1Text}</h1>
      <p>{pText}</p>
    </IconContainer>
  )
}

export const CardSection3 = function({img,author,title,text}){
  return(
    <CardContainer>
      <span style={{backgroundImage:`url(${img})`}}/>
      <p>{author}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </CardContainer>
  )
}

export const IconsFooter = function({img}){
  return(
    <>
    <span style={{backgroundImage:`url(${img})`}}></span>
    </>
  )
}

