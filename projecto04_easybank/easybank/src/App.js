import React, {useState, useEffect} from 'react'
import { 
  Wrapper, 
  HeadNav, 
  Content, 
  Footer, 
  Moviles, 
  Btn, 
  Section3, 
  Section2,
  IconsContact,
  MenuFooter,
  BtnFooter,
  LogoFooter,
  IconHeader,
  Nav,
  ButtonContainer
} from './Components/styles';

import {Icons, Cards, IconsFtr} from './data'

import {CardSection2, CardSection3, IconsFooter} from './Components/Icons.Components'

import logo from './images/logo.svg'

import {HamburgerMenu, imageMovil} from './Components/MovileMenu'

function App() {
  const [show,setShow] = useState(true)
  useEffect(()=>{
    const hadleClickEvent = () => setShow(!show)
    imageMovil.current.addEventListener('click',hadleClickEvent)
    return ()=> imageMovil.current.removeEventListener('click',hadleClickEvent)
  },[show])
  return (
    <Wrapper >
     <HeadNav >
       <IconHeader >
         <span style={{backgroundImage:`url(${logo})`}}></span>
         <p>easybank</p>
       </IconHeader>
       <HamburgerMenu>
       </HamburgerMenu>
       <Nav>
        <li >Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
       </Nav>
       <ButtonContainer>
         <Btn>Request Invite</Btn>
       </ButtonContainer>
     </HeadNav>
     <Content>
        <section id='primera'> 
         <div>
           <span>
           <h1>Next generation digital banking</h1>
           <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending. saving. budgeting. investing. and much more.</p>
           <Btn>Request Invite</Btn>
           </span>
         </div>
         <div>
           <Moviles active={show}></Moviles>
         </div>
        </section>
        <Section2>
          <div>
          <h1>Why choose Easybank?</h1>
          <p> We leverage Open Banking to turn your bank account into your financial hub.
              Control your finances like never before. </p>
          </div>
          <div>{
            Icons.map((el,index)=> <CardSection2 img={el.icon} h1Text={el.h1txt} pText={el.ptxt} key={index}></CardSection2>)
            }
          </div>
        </Section2>
        <Section3>
          <div>
            <h1>Latest Articles</h1>
          </div>
          <div>
           {Cards.map((el,index)=><CardSection3 img={el.img} key={index} author={el.auth} title={el.title} text={el.txt} /> ) }
          </div>
        </Section3>
     </Content>
     <Footer>
       <IconsContact>
         <LogoFooter>
           <div style={{backgroundImage:`url(${logo})`}}></div>
           <p>easybank</p>
         </LogoFooter>
        {IconsFtr.map((el,index)=><IconsFooter key={index} img={el.icon}></IconsFooter>)}
       </IconsContact>
       <MenuFooter>
         <p>About Us</p>
         <p>Careers</p>
         <p>Contact</p>
         <p>Support</p>
         <p>Blog</p>
         <p>Privacy Policy</p>
       </MenuFooter>
       <BtnFooter>
         <Btn>Request Invite</Btn>
         <p>© Easybank. All Rights Reserved</p>
       </BtnFooter>
     </Footer>
    </Wrapper>
  );
}

export default App;


