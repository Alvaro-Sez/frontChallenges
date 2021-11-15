import styled from 'styled-components'
import BGsection from '../images/bg-intro-desktop.svg'
import ImgMoviles from '../images/image-mockups.png'
import BGsectionMovile from '../images/bg-intro-mobile.svg'
import hamburger from '../images/icon-hamburger.svg'
const media = {
  movile: '@media(max-width: 930px)'

}

export const Wrapper = styled.div`
`



export const Content = styled.div`
  width: 100%;
  height: 210vh;
  display:flex;
  flex-wrap:wrap;
  ${media.movile}{
    height: 100%;
  }
  
  section{
    width: 100%;
    background-color: hsl(0, 0%, 98%);
    height: 70vh;
    ${media.movile}{
    height: 100%;
  }
  }
  section:first-child{
    background-image: url(${BGsection});
    background-repeat: no-repeat;
    background-position:620px -260px;
    display:flex;
    background-color:hsl(0, 0%, 98%);
    ${media.movile}{
      background-image: url(${BGsectionMovile});
      flex-flow: column-reverse;
      justify-content: center;
      align-items: center;
      background-position: 0 -65px;
      background-size:  100%;
      height: 680px;
    }
  }
  
  section:first-child div{
    height: 930px;
    width: 50%;
    ${media.movile}{
      width: 100%;
    }
  }
  section:first-child div:nth-child(2){
    height: 100%;
  }
  section:first-child span{
    width:720px;
    height:483px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: start;
    padding:170px;
    padding-right:100px;
    padding-bottom: 0;
    ${media.movile}{
      padding:0;
      text-align: center;
      width: 90%;
      margin:0 auto;
    }
  }
  section:first-child span h1{
    font-size:55px;
    font-weight: 300;
    ${media.movile}{
      margin-top:65px;
      font-size:40px;
    }
  }
  section:first-child span p{
    font-size:18px;
    margin-top:25px;
    margin-bottom:38px;
    ${media.movile}{
      font-size:15px;
    }
  }
`

export const Footer = styled.footer`
  background-color: hsl(233, 26%, 24%);
  width: 100%;
  height: 190px;
  bottom:0;
  display:flex;
  ${media.movile}{
    flex-direction: column;
    height: 510px;
  }
  
`

export const Moviles = styled.div`
background-image: url(${ImgMoviles});
height: 0;
width: 0;
background-repeat: no-repeat;
position:absolute;
left:810px;
top:-45px;
${media.movile}{
  background-size: 370px;
  background-position: center;
  position:absolute;
  left:0;
  top:-305px;
}
${({active})=> !active && `
 display:none;`}
`



export const Btn = styled.button`
  width: 165px;
  height: 44px;
  background-image: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
  border-radius:25px;
  font-weight: 700;
  font-size:14px;
  color:white;
  border:none;
  &:hover{
    opacity: 0.7;
  }
  ${media.movile}{
      align-self: center;
    }
`


export const Section2 = styled.section`
  display:flex;
  flex-direction:column;
  ${media.movile}{
    height: 100vh;
  }
  div:first-child{
    padding-top:100px;
    padding-left:160px;
    background-color:hsl(220, 16%, 96%);
    flex-basis:40%;
    ${media.movile}{
      height: 73px;
      padding:0;
      text-align: center;
      width: 100%;
    }
  }
  div:first-child h1{
    font-size:40px;
    font-weight: 300;
    ${media.movile}{
      font-size: 32px;
      width: 60%;
      margin: 0 auto;
      margin-top: 60px;
    }
  }
  div:first-child p{
    font-size:18px;
    font-weight: 400;
    padding-top:25px;
    width: 45%;
    ${media.movile}{
      font-size:15px;
      margin: 0 auto;
      width: 90%;
      line-height: 1.8;
    }
  }
  div:nth-child(2){
    flex-basis: 60%;
    background-color:hsl(220, 16%, 96%);
    display:flex;
    padding-top: 40px;
    padding-left:160px;
    ${media.movile}{
    flex-direction: column;
    padding:0;
    padding-bottom:55px;
    }
  }
  div:nth-child(2) div{
    ${media.movile}{
      width: 73px;
      margin:0 auto;
      margin-top:50px;
    }
  }
  div:nth-child(2) h1{
    font-weight: 400;
    padding-top:15px;
    padding-bottom:25px;
    ${media.movile}{
      text-align: center;
      font-size:20px;
      padding-bottom:15px;
    }
  }
  div:nth-child(2) p{
    width: 80%;
    ${media.movile}{
      text-align: center;
      margin: 0 auto;
      width: 90%;
      line-height: 1.8;
      font-size:15px;
    }
  }
  
`
export const Section3 = styled.section`
  display:flex;
  flex-direction: column;
  ${media.movile}{
    margin-bottom:100px;
    height: auto;
  }
  div:first-child{
    padding-top:85px;
    padding-left:160px;
    background-color:hsl(0, 0%, 98%);
    flex-basis:25%;
    ${media.movile}{
      padding:0;
      padding-top: 70px;
      padding-bottom: 10px;
    }
  }
  div:first-child h1{
    font-size:40px;
    font-weight: 300;
    ${media.movile}{
      font-size:32px;
      text-align: center;
    }
  }
  div:nth-child(2){
    display:flex;
    background-color:hsl(0, 0%, 98%);
    padding-left:160px;
    ${media.movile}{
      flex-direction:column;
      padding:0;
    }
  }
`

export const IconContainer = styled.span`
  flex-basis:22%;
  div{
    background-repeat:no-repeat;
  }
  
`

export const CardContainer = styled.span`
  flex-basis:20%;
  background-color: white;
  display:flex;
  flex-direction:column;
  margin-top:20px;
  height: 400px;
  margin-right:30px;
  border-radius: 6px;
  ${media.movile}{
    margin:25px;
    margin-bottom:0;
    width: 85%;
    align-self: center;
  }
  span{
    background-position: center;
    background-size: cover;
    min-height: 100px;
    flex-basis:50%;
    border-radius: 6px 6px 0 0;
    ${media.movile}{
      min-height: 200px;
    }
  }
  p:nth-child(2){
    font-size:10px;
    margin-top:30px;
    margin-left:25px;
    
  }
  h3{
    font-weight: 400;
    font-size:16px;
    margin:10px 25px;
  }
  h3:hover{
    color:hsl(136, 65%, 51%);
  }
  p:nth-child(4){
    font-size:13px;
    margin:0 25px;
    font-weight: 300;
    margin-right:20px;
    ${media.movile}{
      margin-bottom:35px;
    }
  }
  
`

export const IconsContact = styled.div`
  flex-basis:30%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  span{
    height: 40px;
    width: 32px;
    background-repeat: no-repeat;
    margin-bottom:25px;
    ${media.movile}{
      margin:0;
      background-size:25px 25px;
      height: 50px;
      width: 40px;
    }
  }
  span:nth-child(2){
    margin-left:50px;
    ${media.movile}{
      margin-left:20px;

    }
  }
  span:hover{
    color:hsl(136, 65%, 51%);
  }
`
export const LogoFooter = styled.div`
    width: 80px;
    flex-basis: 100%;
    display:flex;
    justify-content: center;
    margin-left:50px;
    ${media.movile}{
      margin:0;
      margin-left:25px;
    }
    div{
      background-repeat:no-repeat;
      width:30px;
      height:23px;
      align-self: center;
      margin-top:5px;
      
    }
    p{
      color:white;
      font-weight:900;
      font-size:23px;
      margin-right: 30px;
    }
`

export const MenuFooter =styled.div`
  flex-basis:30%;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items:center;
  margin:40px;
  margin-left:15px;
  padding-right:50px;
  ${media.movile}{
    padding:0;
    margin:0;
  }
  p{
    flex:1 0 50%;
    color:white;
    font-size:14px;
    font-weight: 300;
    ${media.movile}{
      flex-basis:80%;
      text-align: center;
      margin: 7px;
    }
  }
  p:hover{
    color:hsl(136, 65%, 51%);
  }
  p:nth-child(2){
    order:3;
  }
  p:nth-child(4){
    order:3;
  }
  p:nth-child(6){
    order:3;
  }
`
export const BtnFooter = styled.div`
  flex-basis:30%;
  display:flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding-right:80px;
  ${media.movile}{
    padding:0;
  }
  button{
    margin-bottom:25px;
  }
  p{
    font-size:14.5px;
    ${media.movile}{
    align-self: center;
    }
  }
`

export const HeadNav = styled.nav`
  background-color: white;
  height: 80px;
  width: 100%;
  position:relative;
  z-index: 1;
  display:flex;
  ${media.movile}{
    height: 65px;
    justify-content: space-between;
  }
`
export const IconHeader = styled.div`
flex-basis:34%;
display:flex;
justify-content: center;
align-items: center;
span{
  width: 30px;
  height: 23px;
  background-repeat:no-repeat;
  margin-top:7px;
}
p{
  color:hsl(233, 26%, 24%);
  font-size: 23px;
  font-weight:700;
}
${media.movile}{
  margin-left:25px;
}
`
export const Nav = styled.ul`
  flex-basis:31%;
  list-style:none;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right:26px;
  padding-left:30px;
  li{
    font-size:14px;
    height: 100%;
    padding-top:30px;
  }
  li:hover{
    border-bottom-style: solid;
    border-width: 3px;
    border-image: linear-gradient(90deg, rgb(49,211,92), rgb(43,183,218)) 1;
  }
  ${media.movile}{
    display:none;
  }
`
export const ButtonContainer = styled.div`
  flex-basis:35%;
  display:flex;
  justify-content: center;
  align-items: center;
  padding-left:10px;
  ${media.movile}{
    display:none;
  }
`
export const HamburgerIcon = styled.div`
  display:none;
  background-image:url(${hamburger});
  background-repeat: no-repeat;
  background-size:25px 13px;
  width:25px;
  height:25px;
  margin-top:10px;
  margin-right:15px;
  position:relative;
  align-self: center;
  ${media.movile}{
    display:block;
  }
`

export const Dropdown = styled.div`
  background-color:rgba(45, 49, 77, 0.3);
  position: absolute;
  top:65px;
  width: 100%;
  height: 650px;
  display:flex;
  justify-content: center;
  ul{
    width: 100%;
    height: 270px;
    background-color:white;
    list-style-type:none;
    margin:25px;
    border-radius: 6px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul li{
    color:hsl(233, 26%, 24%);
    font-weight: 700;
    margin:10px 0;
    font-size:18px;
  }
`