import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Space Mono', monospace;
  font-size:24px;

}

img{
  max-width:100px;
}

body{
  font-family: 'Space Mono', monospace;
  font-size:24px;
  background-color:hsl(185, 41%, 84%);
  box-sizing: border-box;
}

`