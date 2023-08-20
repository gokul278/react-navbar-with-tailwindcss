import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  const [menuAction,SetMenuaction] = useState(true);
  const [active,SetActive] = useState(window.location.pathname);
  const changeAction = () =>{
    if(menuAction) SetMenuaction(false);
    else SetMenuaction(true);
  }
  const [underline,SetUnderline] = useState("");
  return (
    <div className='fixed'> 
      <div className='h-12 w-screen bg-blur-lg bg-slate-900'>
        <div className='flex flex-row'>
          <div><h1 className='duration-300 text-xl text-white p-2.5 hover:p-2  hover:text-2xl '>Header</h1></div>
          <div className='grow'></div>
            <div className='hidden sm:block'>
              <div className='flex flex-row space-x-8 p-3'>
              <Link to="/" className={`duration-300 ${active === '/' ? ' text-red-600':'text-white'}`} onClick={()=>{SetActive("/")}} onMouseOver={()=>{SetUnderline("home")}} onMouseOut={()=>{SetUnderline("")}}>Home <div className={`duration-300 bg-white h-0.5 rounded-full ${underline === "home"?'w-full':'w-0'}`}></div></Link>
              <Link to="/product" className={`duration-300 ${active === '/product' ? ' text-red-600':'text-white'} `} onClick={()=>{SetActive("/product")}} onMouseOver={()=>{SetUnderline("product")}} onMouseOut={()=>{SetUnderline("")}}>Product <div className={`duration-300 bg-white h-0.5 rounded-full ${underline === "product"?'w-full':'w-0'}`}></div></Link> 
              <Link to="/career" className={`duration-300 ${active === '/career' ? ' text-red-600':'text-white'} `} onClick={()=>{SetActive("/career")}} onMouseOver={()=>{SetUnderline("career")}} onMouseOut={()=>{SetUnderline("")}}>Career<div className={`duration-300 bg-white h-0.5 rounded-full ${underline === "career"?'w-full':'w-0'}`}></div></Link> 
              <Link to="/contact" className={`duration-300 ${active === '/contact' ? ' text-red-600':'text-white'} `} onClick={()=>{SetActive("/contact")}} onMouseOver={()=>{SetUnderline("contact")}} onMouseOut={()=>{SetUnderline("")}}>Contact Us<div className={`duration-300 bg-white h-0.5 rounded-full ${underline === "contact"?'w-full':'w-0'}`}></div></Link> 
              </div>
            </div>
            <div className='pr-3 block sm:hidden pt-1.5'>
              <div className={`text-white text-base rounded-md pr-2 pl-2 pb-1 pt-1 border-white border-solid border-2`} onClick={changeAction}><i className={`duration-700 fa-solid fa-arrow-right text-white ${menuAction ? 'rotate-180' : 'rotate-0'}`}></i></div>
            </div>
        </div>
      </div>
      <div className='block sm:hidden'>
        <div className='flex flex-row-reverse' onClick={()=>{SetMenuaction(true);}}>
          <div className={`duration-300 h-screen bg-slate-900 flex ${menuAction ? 'w-0':'w-44'}`}>
            <div className='mt-5 flex flex-col pl-5'>
              <Link to="/" className={`duration-300 pt-2 pb-2 ${active === '/' ? ' text-red-600':'text-white'} ${menuAction ? 'hidden':'block'}`} onClick={()=>{SetActive("/")}}>Home</Link>
              <Link to="/product" className={`duration-300 pt-2 pb-2 ${active === '/product' ? ' text-red-600':'text-white'} ${menuAction ? 'hidden':'block'}`} onClick={()=>{SetActive("/product")}}>Product</Link>
              <Link to="/career" className={`duration-300 pt-2 pb-2 ${active === '/career' ? ' text-red-600':'text-white'} ${menuAction ? 'hidden':'block'}`} onClick={()=>{SetActive("/career")}}>Career</Link>
              <Link to="/contact" className={`duration-300 pt-2 pb-2 ${active === '/contact' ? ' text-red-600':'text-white'} ${menuAction ? 'hidden':'block'}`} onClick={()=>{SetActive("/contact")}}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
