import React, {useState, useEffect, useRef} from 'react';
import { 
  Calc,
  Title, 
  Title2, 
  Inputs, 
  Screen, 
  Billinput, 
  Tipbuttons, 
  Inputsheader, 
  Tips, 
  People, 
  Custom,
  ScreenTextContainer,
  TextTitle,
  Textcontent,
  Amount,
  Reset,
  MsgError,
  Adiv,
  IconDollar,
  IconPerson} from './Layout.style'


export default function Layaout (){
  const [active,setActive] = useState(null)
  const [error,setError] = useState(false)
  const [bill,setBill] = useState(0)
  const [person,setPerson] = useState(null)
  const [custom,setCustom] = useState(0)
  const [quantity,setQuantity] = useState(parseFloat(0).toFixed(2))
  const [total,setTotal] = useState(parseFloat(0).toFixed(2))
  const tips=[5,10,15,25,50];
  let customInpt = useRef(),
  billInpt = useRef(),
  peopleInpt = useRef()

  const customValue = (e) =>{
    setCustom(e.target.value)
    setActive(null)
  }

  useEffect(()=>{
    let totalPerson,
    tipAmount;
    if(person){
      if(active){
        customInpt.current.value = null
        totalPerson = parseFloat((bill*( 1+(active/100) )/person )).toFixed(2) 
        tipAmount = parseFloat((( bill*(active/100) )/person )).toFixed(2)
        setTotal(totalPerson)
        setQuantity(tipAmount)
      }else{
        totalPerson = parseFloat((bill*( 1+(custom/100) )/person )).toFixed(2)
        tipAmount = parseFloat((( bill*(custom/100) )/person )).toFixed(2)
        setTotal(totalPerson)
        setQuantity(tipAmount)
      }
    }
  },[person,active,bill,custom])
  
  const peopleActive = (e) => {
    if(e.target.value === false){ 
      setError(true)
    }else{
      setError(false)
      setPerson(e.target.value)
    }
  }

  const resetCalc = () =>{
    customInpt.current.value = null;
    peopleInpt.current.value = null;
    billInpt.current.value = null;
    setActive(null)
    setError(false)
    setBill(0)
    setPerson(null)
    setCustom(0)
    setQuantity(parseFloat(0).toFixed(2))
    setTotal(parseFloat(0).toFixed(2))
  }
  

  return(
    <>
    <Title>SPLI</Title>
    <Title2>TTER</Title2>
    <Calc>
      <Inputs>
        <Adiv>
        <Inputsheader>Bill</Inputsheader>
        <IconDollar ></IconDollar> 
        <Billinput ref={billInpt}  onChange={(e)=>{setBill(e.target.value)}} type="Number" placeholder="0"></Billinput>
        </Adiv>
        <Inputsheader>Select Tip %</Inputsheader> 
        <Tips>
          {tips.map((el,index)=>
          <Tipbuttons
            key={index}
            active ={active === el}
            onClick={()=>setActive(el)}
            >
            {el}% 
          </Tipbuttons>)}
          <Custom ref={customInpt} onChange={customValue} type="Number" placeholder="Custom"></Custom>
        </Tips>
        <Adiv>
        <Inputsheader>Number of People</Inputsheader>
        <IconPerson ></IconPerson>
        <MsgError error={error} >Can't be zero</MsgError>
        <People ref={peopleInpt} type="Number" onChange={peopleActive} placeholder="0"></People>
        </Adiv> 
      </Inputs>
      <Screen>
      <ScreenTextContainer>
        <TextTitle>Tip Amount</TextTitle>
        <Textcontent>/ person</Textcontent>
        <Amount>${quantity}</Amount>
      </ScreenTextContainer>
      <ScreenTextContainer>
        <TextTitle>Total</TextTitle>
        <Textcontent>/ person</Textcontent>
        <Amount>${total}</Amount>
      </ScreenTextContainer>
      <Reset onClick={resetCalc} disabled={!(person|active|custom|bill|quantity|total)}>RESET</Reset>
      </Screen>
    </Calc>
    </>
  )

}