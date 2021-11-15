import styled from 'styled-components';
import Pattern from '../images/pattern-bg.png';
import arrowBtn from '../images/arrow-btn.png'

const media = {
  movile: '@media(max-width: 900px)'
}

export const IpInput = styled.input`
  height: 60px;
  max-width: 500px;
  width:100%;
  margin-left:50px;
  font-weight:500;
  border:none;
  border-radius: 15px 0 0 15px;
  padding:30px;
  &:focus{
    border:none;
    outline:none;
  }
  &::placeholder{
    color:hsl(0, 0%, 59%);
    font-weight: 400;
  }  
`
;

export const Submit = styled.button`
  background-image: url(${arrowBtn});
  height: 60px;
  width: 60px;
  min-width: 60px;
  margin-right: 50px;
  border-radius: 0 15px 15px 0;
  border:none;
  &:hover{
    opacity:0.75;
    transition: opacity 0.3s ease-out;
  }
`;

export const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items: center;
`

export const Banner = styled.header`
  background-image:url(${Pattern});
  background-size: cover;
  background-repeat:no-repeat;
  width: 100%;
  height: 31vh;
  margin:0;
  padding:0;
`

export const Interface = styled.div`
  display:flex;
  position:absolute;
  z-index: 900;
  width: 100%;
  max-width: 560;
  top:90px;
  justify-content: center;
  ${media.movile}{
    min-width: 320px;
    top:60px;
  }
`
export const Title = styled.h1`
  color:white;
  font-size: 28px;
  font-weight: 500;
  position:absolute;
  top:30px;
  width: 100%;
  text-align: center;
  ${media.movile}{
    top:15px; 
  }
`

export const Datalist = styled.ul`
  position:absolute;
  background-color:white;
  max-width: 1400px;
  min-width:779px;
  width: 80%;
  height: 160px;
  display:flex;
  z-index:900;
  top: 22vh;
  margin:0 100;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border-radius:15px;
  ${media.movile}{
    flex-direction:column;
    top: 150px;
    height: 250px;
    min-width: 300px;
  }
`

export const PanelDiv = styled.li`
  flex:60%;
  height: 100%;
  h5{
    position:relative;
    left:35px;
    top:30px;
    letter-spacing: 1.5px;
    font-weight: 700;
    color:hsl(0, 0%, 59%);
    font-size:11px;
    ${media.movile}{
      margin:0;
      position:static;
      text-align: center;
      margin-left:0;
      margin-top:8px;
      margin-bottom: 8px;
    }
  }
  p{
    margin-top:30px;
    padding-top:20px;
    height: 45%;
    color:black;
    border-right: 1px solid hsl(0, 0%, 80%);
    letter-spacing: normal;
    font-size:22px;
    font-weight: 500;
    text-align: center;
    ${media.movile}{
      margin:0;
      border:none;
      padding:10px;
      padding-top:0;
      padding-bottom:0;

    }
  }
  :nth-child(2){
    p{
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  :nth-child(4){
    p{
      border:none;
    }
  }
`