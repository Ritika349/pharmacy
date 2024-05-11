import {Link} from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => { 
  const [changeHeader, setChangeHeader] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const handleClick = () => {
    setMobileNav(!mobileNav)
}
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
        setChangeHeader(true)
    } else {
        setChangeHeader(false)
    }
}
  window.addEventListener('scroll', onChangeHeader)
  return (
    <nav className={changeHeader ? "bg-blue-100 fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"} >
        <div className='flex justify-between ml-12 2xl p-2  mx-42 mt-3'>
          <div className='flex'>
        <img className="w-18 h-10 select-none rounded-full border border-blue-600 2xl " src="https://tse1.mm.bing.net/th?id=OIP.KrQ7YPtlADn4HOIRou76vwHaE7&pid=Api&P=0&h=180" alt="logo" />
        <span className=" ml-2 text-3xl font-semibold text-blue-600 brand-font select-none">Pharmcy</span>
        </div>
          <ul className='flex text-xl mr-12'>
            <li className='hover:underline  p-2  hover:font-bold ' onClick={handleClick}>
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