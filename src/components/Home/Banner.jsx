import React from 'react';
import Fade from 'react-reveal/Fade';
const Banner = () => {
     return (
    
          <section className="max-w-screen-xl  mx-auto px-6 my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
                <Fade left>
                    <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-2">
                 <div className="flex flex-col space-y-2 ">
                            <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">Best Quality <br /> <span className="text-5xl">Medicine in 2024</span></h1>
                            <p className="text-gray-500 text-light text-sm">Our products are world best product.We sell the real projects.<br/> Welcome to our shop.</p>
                        </div>
                      </div>
                </Fade>
        <Fade right>
                    <div className="order-1 lg:order-2 ">
                        <img src="https://phami-pharma.web.app/assets/banner/banner.png" alt="banner" />
                    </div>
                </Fade>
            </div>
        </section>
        
  
       
    )
}

export default Banner
