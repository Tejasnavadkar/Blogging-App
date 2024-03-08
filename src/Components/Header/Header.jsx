import React, { useRef, useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {

  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate();
 
  

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ];

 let [open,setopen] = useState(false)
// inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full  


  return (
    <header className=' md:py-1 p-1 shadow w-full bg-gray-600 text-white fixed top-0 left-0 md:rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Container>
        <nav className='flex '>
          <div className=''>
            <Link to='/'>
              <Logo className="" width='65px'/>
              <div className='text-2xl text-white-700 font-bold md:hidden'><h1 className=''>Bloggerr.</h1></div>
            </Link>
          </div>
          <div onClick={()=>setopen(!open)} className='text-3xl absolute right-3 cursor-pointer md:hidden '>
          <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
          </div>
          <ul className={`md:flex mt-7  md:mt-1 ml-auto absolute  md:static md:z-0  bg-gray-600 left-0 w-full md:w-auto md:pb-0 pb-7 transition-all duration-500 ease-in z-[-1] ${open ? 'top-0':'top-[-490px]'} `}>
            {navItems.map((item)=> item.active ? (
              <li key={item.name}>
               <button
                onClick={()=>{navigate(item.slug)
                setopen(false)}}
                className=' inline-block  px-6 py-2  duration-200 transition-all hover:bg-white rounded-full hover:text-black'
                >{item.name}</button>
              </li>
            ) : null)}
            {authStatus && (
              <li>
                <LogoutBtn /> 
              </li>
            )}
          </ul>
          <div class="md:hidden" >
            {/* <button class="text-4xl hover:text-gray-700 " href="#">&#8801</button>  */}
        </div>
        </nav>
      </Container>
    </header>
  )
}


export default Header