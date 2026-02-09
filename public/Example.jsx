
import React from 'react';


const Example = () => {
    return (
        <>
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8">
          
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              BRAND<span className="text-indigo-500">NAME</span>
            </h2>
          </div>

          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-indigo-400 transition">Solutions</a>
            <a href="#" className="hover:text-indigo-400 transition">Pricing</a>
            <a href="#" className="hover:text-indigo-400 transition">About</a>
            <a href="#" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} BrandName Inc. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>


        </>

    )
}
export default Example;