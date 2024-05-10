import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
  return (
        <Fade left>
        <footer className="text-gray-600 poppins bg-gray-100 ">
            <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex items-center space-x-4 ">
                <img className="w-12 select-none rounded-full border border-blue-600 2xl" src="https://tse1.mm.bing.net/th?id=OIP.KrQ7YPtlADn4HOIRou76vwHaE7&pid=Api&P=0&h=180" alt="logo" />
                    <h1 className="text-3xl font-semibold text-blue-600 brand-font select-none">Pharmcy</h1>
                </div>
                <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Working Hours</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                           <li>Monday to Sunday</li>
                           <li>7 am to 9 pm</li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Services</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                           <li>Pharmacy Help Line</li>
                            <li>Prescribing Tools</li>
                          <li>Specialty Medications</li>
                     <li>Pharmacy Claims</li>
                         </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Contact</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                         <li>9988556903</li>
                         <li>9988556903</li>
                         <li>9988556903</li>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="bg-blue-700">
                <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 Developed by — Ritika
                    </p>
                </div>
            </div>
        </footer>
        </Fade>
    )
}

export default Footer
