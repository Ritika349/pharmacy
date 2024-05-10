import React from 'react'
import Product from './Product'

const Products = () => {
  const para ="https://tse2.mm.bing.net/th?id=OIP.FUAuKqRMVW7BC5M4wN69zgHaFj&pid=Api&P=0&h=180"
  const dolo="https://tse1.mm.bing.net/th?id=OIP.FORzPbBt2U7NI6MdC0OFbgHaHa&pid=Api&P=0&h=180"
  const multivitamin="https://tse2.mm.bing.net/th?id=OIP.OU0BjcD_Mae5NWwao_JePQHaHa&pid=Api&P=0&h=180"
  const shelcal="https://tse2.mm.bing.net/th?id=OIP.4PFaYp3iudht2Xf5Iy_NyAHaHa&pid=Api&P=0&h=180"
  const neurobion="https://tse2.mm.bing.net/th?id=OIP.MOsXxz_M2hjC_qeVSUzSNQHaHa&pid=Api&P=0&h=180"
  const iron="https://tse3.mm.bing.net/th?id=OIP.eWvIuVw_eNFjhVCmZLprTQHaHa&pid=Api&P=0&h=180"
  const bpbalance="https://tse2.mm.bing.net/th?id=OIP.p_skL1bJ1GH_2qI9LNuu2wHaHa&pid=Api&P=0&h=180"
  const omeprazole="https://tse4.mm.bing.net/th?id=OIP.EmauzUDcVCAm0nxbDwbJhwHaHa&pid=Api&P=0&h=180"
  return (
    // <section className=" mt-26 max-w-screen-xl mx-auto px-6 py-6 pb-24">    
       <section className="mt-24 ml-32 mr-32 justify-center items-center  "> 
         <div className="flex flex-col items-center space-x-2 pb-4"> 
                <h1 className="text-gray-700 poppins text-3xl">Our <span className="text-blue-600 font-semibold select-none">Products</span></h1>
                <div className="bg-blue-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
          </div> 
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6 px-6 "> 
              
        <Product image={para} name="Paracetamol" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        <Product image={dolo} name="Dolo" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        <Product image={multivitamin}name="Multivitamin" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
       
        
        <Product image={shelcal} name="Shelcal" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        <Product image={neurobion} name="Neurobion" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        <Product  image={iron} name="Iron" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
      
        <Product image={bpbalance} name="BP balance" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        <Product image={omeprazole} name="Omeprazole" type="tablet"  manufacturer= 'Generic Pharma' price="10.5" expiryDate= '2024-06-30'/>
        </div>
        </section>
        
         
      
    
  )
    }

export default Products