import React from 'react'
import Fade from 'react-reveal/Fade';
const Product = ({ name,type,price,manufacturer,expiryDate,image }) => {
  return (
    <Fade left>
        
    <div className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl  py-10">
   
       <img className='w-62 h-62' src= {image} alt="image"/>
      <h2 className="text-xl poppins font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">Type: {type}</p>
      <p className="text-gray-700 mb-2">Manufacturer: {manufacturer}</p>
      <p className="text-gray-700 mb-2">Price: ${price}</p>
      <p className="text-gray-700">Expiry Date: {expiryDate}</p>
    
    </div>
    
    </Fade>
  )
}

export default Product