import {Link} from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => { 
  const [changeHeader, setChangeHeader] = useState(false)
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
        setChangeHeader(true)
    } else {
        setChangeHeader(false)
    }
}
  window.addEventListener('scroll', onChangeHeader)
  return (
    <nav className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"} >
        <div className='flex justify-evenly m-5 border border-blue-900 2xl p-2 rounded-lg bg-blue-200'>
        <img className="w-12 select-none rounded-xl border border-blue-600 2xl" src="https://media1.giphy.com/media/NhK1r9tda2DTNAtmSM/giphy.webp?cid=ecf05e47ak910m3kk0xl8rfanedrbr3i2z5izi8tiwt74l68&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="logo" />
          <ul className='flex text-2xl'>
            <li className='hover:underline  p-2  hover:font-bold '>
                <Link to='/'>Home</Link>
            </li>
            <li className='hover:underline  p-2  hover:font-bold '>
                <Link to='/product'>Products</Link>
            </li> 
            <li className='hover:underline  p-2 hover:font-bold '>
                <Link to='/contact'>Contact us</Link>
                </li>
               
            <li className='hover:underline p-2  hover:font-bold '>
                <Link to='/login'>Login</Link>
             </li>   
             </ul>
            </div>
    </nav>
  )
}
export default Navbar