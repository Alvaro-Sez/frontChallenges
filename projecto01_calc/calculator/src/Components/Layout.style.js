import styled from 'styled-components';
import Dollar from '../images/icon-dollar.svg';
import Person from '../images/icon-person.svg';

/* colors */
const VeryDC = 'hsl(183, 100%, 15%)',
StrongCyan = 'hsl(172, 67%, 45%)',
DarkGCyan = 'hsl(186, 14%, 43%)',
DarkGCyan2 = 'hsl(184, 14%, 56%)',
LightGCyan2 = 'hsl(189, 41%, 97%)'

const media = {
  movile: '@media(max-width: 850px)'

}

export const Title = styled.h3`
  margin-top: 140px;
  text-align: center;
  color:${DarkGCyan};
`
export const Title2 = styled.h3`
  text-align: center;
  color:${DarkGCyan};
`
export const Calc = styled.div`
  width: 900px;
  height: 450px;
  background-color:white;
  margin:0 auto;
  border-radius:25px;
  margin-top: 60px;
  display:flex;
  ${media.movile}{
    flex-direction: column;
    width: 375px;
    height: 830px;
  }
`

export const Inputs = styled.div`
  width: 450px;
  margin:15px;
  padding-left:25px;
  padding-right:5px;
  ${media.movile}{
    width:330px;
    margin-top:0;
  }
`
export const Screen = styled.div`
  width: 450px;
  background-color: ${VeryDC};
  border-radius: 15px;
  margin:30px;
  ${media.movile}{
    width:330px;
    height: 300px;
    align-self:center;
    position:relative;
    margin-top:15px;
    margin-bottom:0;
  }
`
export const Inputsheader = styled.p`
  color:${DarkGCyan};
  font-weight: 700;
  font-size:15.5px;
  padding-bottom:5px;
  margin-top:35px;
`
export const Billinput = styled.input`
  background-color: ${LightGCyan2};
  color:${VeryDC};
  width: 100%;
  font-weight: bold;
  height: 45px;
  border-radius:5px;
  border:none;
  text-align: right;
  padding-right:20px;
  &::placeholder{
    text-align:right;
    font-weight: 600;
    color: ${DarkGCyan};
    opacity: 0.5; 
  }
  &:focus{
    outline-width:3px; 
    outline-color:${StrongCyan};
  }
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance:none;
    margin:0;
  }
`

export const Tips = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;

`

export const Tipbuttons = styled.button`
  background-color: ${VeryDC};
  border-radius:5px;
  margin-top: 15px;
  width:115px;
  height: 45px;
  font-size:15.5;
  color:white;
  border:none;
  font-weight: 600;
  &:hover{
    color:${VeryDC};
    background-color:#9EE8DF;
  }
  ${({active}) => active && `
    background-color: ${StrongCyan};
    color: ${VeryDC};
  `
  }
  ${media.movile}{
   width:140px; 
   height: 50px;
  }
`

export const People = styled.input`
  background-color: ${LightGCyan2};
  height: 45px;
  font-weight: bold;
  color:${VeryDC};
  width: 100%;
  border-radius:5px;
  padding-right:20px;
  text-align:right;
  border:none;
  &::placeholder{
    text-align:right;
    font-weight: 600;
    color: ${DarkGCyan};
    opacity: 0.5;}
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance:none;
    margin:0;
  }
`
export const Custom = styled.input`
  background-color: ${LightGCyan2};
  border-radius:5px;
  margin-top: 15px;
  font-weight: bold;
  color:${VeryDC};
  width:115px;
  height: 45px;
  text-align:center;
  border:none;
  &::placeholder{
    font-weight: 600;
    color:${DarkGCyan2};
    text-align:center;
  }
  &:focus{
    outline-width:3px; 
    outline-color:${StrongCyan};
  }
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance:none;
    margin:0;
  }
  ${media.movile}{
    width:140px;
    height:50px;
  }
  `

export const ScreenTextContainer = styled.div`
  margin:30px 40px;
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr 1fr;
  grid-template-areas:
  "title amount"
  "person amount";
`
export const TextTitle = styled.span`
  color:${LightGCyan2};
  font-weight: bold;
  font-size:15.5px;
  grid-area: title;
`
export const Textcontent = styled.p`
  grid-area: person;
  color: ${DarkGCyan};
  font-weight: bold;
  font-size:13px;
`
export const Amount = styled.p`
  grid-area: amount;
  font-size:45px;
  font-weight: bold;
  text-align:right;
  color:${StrongCyan};
`



export const Reset = styled.button`
  background-color: ${StrongCyan};
  height: 50px;
  margin-top:80px;
  font-weight: 900;
  font-size:20px;
  color:${VeryDC};
  border:none;
  margin-left: 40px;
  width: 80%;
  border-radius:5px;
  &:hover{
    background-color:#9EE8DF;
  }
  &:disabled{
    background-color:#0C686D;
    color:#00474B;
  }
  ${media.movile}{
    align-self: center;
    position: absolute;
    top:150px;
    right: 35px;
  }
`
export const MsgError = styled.span`
color:lightsalmon;
font-size: 15.5px;
display:none;
text-align:right;
position:absolute;
font-weight: bold;
right:15px;
top:0;
${({error})=> error && `
  display:block;
`}
`
export const Adiv = styled.div`
position: relative;
`
export const IconDollar = styled.div`
background-image:url(${Dollar});
background-color:${LightGCyan2};
background-repeat:no-repeat;
background-position: center;
background-size: cover;
width:12px;
height: 20px;
position:absolute;
bottom:12px;
left: 10px;
`
export const IconPerson = styled.div`
background-image:url(${Person});
background-repeat:no-repeat;
background-position:center;
height: 20px;
width: 20px;
position:absolute;
bottom:12px;
left:10px;
`
