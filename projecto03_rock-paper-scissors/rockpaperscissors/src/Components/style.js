import styled from 'styled-components'
import triangle from '../images/bg-triangle.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import sci from '../images/icon-scissors.svg'
import closeBtn from '../images/icon-close.svg'
import rules from '../images/image-rules.svg'

const media = {
  movile: '@media(max-width: 500px)'
}

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%)) ;
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const TriangleContainer = styled.div`
  background-image: url(${triangle});
  background-repeat:no-repeat;
  width: 300px;
  height: 355px;
  position: relative;
  z-index:0;
  margin-top: 120px;
  display:none;
  ${({active})=> active && `
    display:block;
  `}
  ${media.movile}{
    background-size:cover;
    width: 200px;
    margin:0;
    margin-bottom:40px;
    margin-top:0px;
    height: 200px;
  }
`


export const GameContent = styled.div`
  width: 100%;
  height: 480px;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const Panel = styled.div`
  width: 100%;
  height: 240px;
  display:flex;
  justify-content: center;
  align-items: center;
  ${media.movile}{
    height: 160px;
  }
`

export const Paper = styled.div`
  width: 195px;
  height: 195px;
  border:solid 22px hsl(230, 89%, 62%);
  border-radius:50%;
  background-color:rgba(230,230,230,255);
  position:absolute;
  top:-100px;
  left:-100px;
  background-image: url(${paper});
  background-repeat:no-repeat;
  background-position:center;
  background-size:45%;
  box-shadow:0px 10px rgb(42,68,192), inset 0px 10px rgba(185,190,211);
  ${media.movile}{
    left:-50px;
    top:-60px;
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(42,68,192), inset 0px 5px rgba(185,190,211);
  }
`

export const Scissors = styled.div`
  width: 195px;
  height: 195px;
  border:solid 22px hsl(39, 89%, 49%);
  border-radius:50%;
  background-color:rgba(230,230,230,255);
  position:absolute;
  top:-100px;
  left:200px;
  background-image: url(${sci});
  background-repeat:no-repeat;
  background-position:center;
  background-size:45%;
  box-shadow:0px 10px rgb(199,108,27), inset 0px 10px rgba(185,190,211);
  ${media.movile}{
    top:-60px;
    left:133px;
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(199,108,27), inset 0px 5px rgba(185,190,211);
  }
`

export const Rock = styled.div`
  width: 195px;
  height: 195px;
  background-color:rgba(230,230,230,255);
  background-image: url(${rock});
  position:absolute;
  top:130px;
  left:50px;
  border: 22px solid hsl(349, 71%, 52%);
  border-radius:50%;
  background-repeat:no-repeat;
  background-position:center;
  background-size:45%;
  box-shadow:0px 10px rgb(159,22,52), inset 0px 10px rgba(185,190,211);
  ${media.movile}{
    top:90px;
    left:42px;
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(159,22,52), inset 0px 5px rgba(185,190,211);
  }
`

export const Marcador = styled.div`
  width: 51.5%;
  min-width: 450px;
  height: 153px;
  border: solid 3px hsl(217, 16%, 45%);
  border-radius: 15px;
  display:flex;
  justify-content: space-between;
  ${media.movile}{
    height: 100px;
    min-width:315px;
    border-radius:5px;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  display:flex;
  justify-content: end;
  align-items: start;
  position:relative;
  ${media.movile}{
    justify-content: center;
  }
`

export const RulesBtn = styled.div`
  height: 42px;
  width: 130px;
  background-color: transparent;
  color: hsl(220, 16%, 96%);
  border: solid 2px hsl(220, 16%, 96%);
  border-radius:9px;
  margin-right:30px;
  margin-bottom:40px;
  text-align: center;
  padding-top:8px;
  letter-spacing: 1.5px;
  font-weight: 400;
  position:absolute;
  top:-25px;
  ${media.movile}{
    top:0;
    margin:0;
  }
`
export const RulesModal = styled.div`
  background-color:rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: start;
  z-index:10;
  ${({active})=> active && `
    display:flex;
  `}
`
export const RulesContainer = styled.div`
  width: 407px;
  height: 415px;
  z-index: 998;
  background-color: white;
  border-radius: 10px;
  margin-top: 175px;
  display:flex;
  flex-direction: column;
  ${media.movile}{
    width: 360px;
    height: 390px;
  }
`

export const TitleRules = styled.div`
  width: 100%;
  height: 70px;
  display:flex;
  justify-content: space-between;
  padding:30px 35px;
  h1{
    font-size:30px;
    letter-spacing: 1px;
    color:hsl(229, 25%, 31%)
  }

`

export const CloseIcon = styled.span`
  background-image: url(${closeBtn});
  background-position: center;
  background-size:20px 20px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-top:3px;
`

export const RulesImg = styled.div`
  width: 80%;
  height: 100%;
  background-image:url(${rules});
  background-repeat:no-repeat;
  margin-top:43px;
  margin-left:50px;
  ${media.movile}{
    width: 90%;
    height: 270px;
    margin-top:20px;
    margin-left:25px;
    margin-bottom:0;
  }
`
/* Selected window */


export const RockSelected = styled.div`
    width: 290px;
    height: 290px;
    background-color:rgba(230,230,230,255);
    background-image: url(${rock});
    border: 33px solid hsl(349, 71%, 52%);
    border-radius:50%;
    background-repeat:no-repeat;
    background-position:center;
    background-size:45%;
    box-shadow:0px 12px rgb(159,22,52), inset 0px 12px rgba(185,190,211);
    display:none;
    ${({selected}) => selected && `
    display: block;`}
    ${({selectedComputer}) => selectedComputer && `
    display: block;`}
    ${({winner}) => winner && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`}
    ${({loser}) => loser && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`} 
    ${media.movile}{
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(159,22,52), inset 0px 5px rgba(185,190,211);
    ${({winner}) => winner && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`}
    ${({loser}) => loser && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`} 
    }   
`

export const ScissorsSelected = styled.div`
  width: 290px;
  height: 290px;
  border:solid 33px hsl(39, 89%, 49%);
  border-radius:50%;
  background-color:rgba(230,230,230,255);
  background-image: url(${sci});
  background-repeat:no-repeat;
  background-position:center;
  background-size:45%;
  box-shadow:0px 12px rgb(199,108,27), inset 0px 12px rgba(185,190,211);
  display:none;
  ${({selected}) => selected && `
    display: block;`}
  ${({selectedComputer}) => selectedComputer && `
    display: block;`}
  ${({winner}) => winner && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`}
  ${({loser}) => loser && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`}
  ${media.movile}{
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(199,108,27), inset 0px 5px rgba(185,190,211);
    ${({winner}) => winner && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`}
    ${({loser}) => loser && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`} 
  }
`


export const PaperSelected = styled.div`
  width: 290px;
  height: 290px;
  border:solid 33px hsl(230, 89%, 62%);
  border-radius:50%;
  background-color:rgba(230,230,230,255);
  background-image: url(${paper});
  background-repeat:no-repeat;
  background-position:center;
  background-size:45%;
  box-shadow:0px 12px rgb(42,68,192), inset 0px 12px rgba(185,190,211);
  display:none;
  ${({selected}) => selected && `
    display: block;`}
  ${({selectedComputer}) => selectedComputer && `
    display: block;`}  
  ${({winner}) => winner && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`}
  ${({loser}) => loser && `
    box-shadow:
    0 0 0 65px rgba(255, 255, 255, 0.04),
    0 0 0 133px rgba(255, 255, 255, 0.03),
    0 0 0 215px rgba(255, 255, 255, 0.02);`}
  ${media.movile}{
    width: 130px;
    height: 130px;
    border-width: 15px;
    box-shadow:0px 5px rgb(42,68,192), inset 0px 5px rgba(185,190,211);
    ${({winner}) => winner && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`}
    ${({loser}) => loser && `
    box-shadow:
    0 0 0 15px rgba(255, 255, 255, 0.04),
    0 0 0 45px rgba(255, 255, 255, 0.03),
    0 0 0 80px rgba(255, 255, 255, 0.02);`} 
  } 
`

export const SelectedContainer = styled.div`
  width: 350px;
  height: 355px;
  z-index:1;
  position: relative;
  margin-top: 120px;
  ${media.movile}{
    width: 50%;
    margin-top:0px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top:65px;
    height: 250px;
    align-self: start;
    flex-direction:column-reverse;
  }
`

export const PlayingContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display:none;
  ${({active})=> active && `
    display:flex;`}
  ${media.movile}{
    flex-wrap: wrap;
    justify-content: start;
  } 
`

export const VeredictContainer = styled.div`
  width: 280px;
  display:none;
  height: 143px;
  margin-top:45px;
  padding-left:5px;
  ${({active})=> active && `
    display:flex;`}
  ${media.movile}{
    order:2;
    margin-top:0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const SelectedComputerContainer = styled.div`
  width: 320px;
  height: 355px;
  position:relative;
  margin-top:120px;
  padding-left:15px;
  ${media.movile}{
    width: 50%;
    padding:0;
    margin:0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left:0px;
    padding-top:65px;
    height: 250px;
    align-self: start;
    flex-direction:column-reverse;

  }

`
export const EmptyComputerSelection = styled.div`
  background-color: black;
  margin-top: 35px;
  margin-left:35px;
  opacity: 0.2;
  width: 225px;
  height: 225px;
  border-radius:50%;
  z-index:1;
  ${({selectedComputer}) => selectedComputer && `
    display: none;`}
  ${media.movile}{
    opacity:0.1;
    width: 110px;
    height: 110px;
    margin:0;
    margin-top:15px;
    margin-left:40px;
  }
`


export const YouWon = styled.div`
  width: 100%;
  height: 100%;
  display:none;
  flex-direction:column;
  justify-content: space-between;
  align-items: start;
  h1{
    height: 50px;
    color:white;
    letter-spacing: 0.8px;
    font-size:55px;
    padding-left:17px;
  }
  ${({active})=> active && `
    display:flex;`}
  ${media.movile}{
    justify-content: space-between;
    align-items: center;
    h1{
      padding:0;
    }
  }
`

export const YouLost = styled.div`
  width: 100%;
  height: 100%;
  display:none;
  flex-direction:column;
  justify-content: space-between;
  align-items: start;
  h1{
    height: 50px;
    min-width: 230px;
    color:white;
    letter-spacing: 0.8px;
    font-size:55px;
    padding-left:5px;
  }
  ${({active})=> active && `
    display:flex;`
  }
  ${media.movile}{
    justify-content: space-between;
    align-items: center;
    h1{
      padding:0;
    }
  }
`
export const Draw = styled.div`
  width: 100%;
  height: 100%;
  display:none;
  flex-direction:column;
  justify-content: space-between;
  align-items: start;
  h1{
    height: 50px;
    color:white;
    letter-spacing: 0.8px;
    font-size:55px;
    padding-left:10px;
  }
  ${({active})=> active && `
    display:flex;`}
  ${media.movile}{
    justify-content: space-between;
    align-items: center;
    h1{
      padding:0;
    }
  }
`

export const PlayAgain = styled.button`
  width: 220px;
  border-radius: 8px;
  letter-spacing: 1.5px;
  border:none;
  height: 50px;
  margin-left:4px;
  margin-bottom: 10px;
  background-color: white;
  ${media.movile}{
    margin-left:0;
  }
`
export const TitlePlayer = styled.h1`
 position: absolute;
 top:-93px;
 left:73px;
 color:white;
 font-size:24px;
 letter-spacing: 2.5px;
 font-weight: 500;
 ${media.movile}{
  font-size:15px;
  letter-spacing: 2px;
  position:static;
  padding-bottom: 10px;
 }
`

export const TitleComputer = styled.h1`
 position: absolute;
 top:-93px;
 left:45px;
 color:white;
 font-size:24px;
 letter-spacing: 2.5px;
 font-weight: 500;
 ${media.movile}{
   font-size:15px;
   letter-spacing: 2px;
   position:static;
   padding-bottom:10px;
 }
`

export const TitleGame = styled.h1`
  font-size:40px;
  color:white;
  margin-left:30px;
  margin-top:22px;
  width: 160px;
  line-height: 0.8;
  font-weight: 300;
  ${media.movile}{
    margin:20px;
    width: 70px;
    font-size:22px;
  }
`
export const ScoreContainer = styled.div`
  background-color: white;
  width: 150px;
  height: 114px;
  border-radius:10px;
  margin-top:17px;
  display:grid;
  place-content: center;
  flex-direction: column;
  margin-right:25px;
  h1{
    font-size:16px;
    color:hsl(229, 64%, 46%);
    letter-spacing: 2.2px;
  }
  p{
    color:hsl(229, 25%, 31%);
    font-size:65px;
    line-height: 100%;
    width: 100%;
    text-align:center;
  }
  ${media.movile}{
    height: 70px;
    width: 80px;
    border-radius: 5px;
    margin:auto 10px;
    p{
      font-size:38px;
    }
    h1{
      font-size:12px;
    }
  }
`
