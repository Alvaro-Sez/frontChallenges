import React, {useState, useRef} from 'react'
import {HamburgerIcon, Dropdown} from './styles'


export const HamburgerMenu = () =>{
  const [open,setOpen] = useState(false)
  imageMovil = useRef()

  return(
    <>
    <HamburgerIcon onClick={()=>setOpen(!open)} ref={imageMovil} ></HamburgerIcon>
    {open && <Dropdown>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </Dropdown>}
    </>
  )
}
export let imageMovil

