import React from 'react'
import { Button } from './Button';

const Footer = () => {
  return (
    <div className='mx-auto max-w-6xl text-black'>
        <div className="bg-blue-200 text-white py-12 mt-10">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h3 className="text-xl font-bold mb-4  text-black">WOULD YOU LIKE TO DO A SPONSORED CHARITY EVENT?</h3>
<p className="text-sm mb-4  text-black">
Whether it’s raising funds from a cake bake or being sponsored for a marathon, any money you raise will be put to good use.
</p>
{/* <button className="bg-orange-500 px-4 py-2 rounded font-semibold">Find Out More</button> */}
   <Button title={"Find Out More"} lg />
</div>
<div className="bg-white text-gray-900 p-6 rounded shadow">
<h4 className="font-bold mb-3">HOW TO DONATE</h4>
<p className="text-sm mb-4">Donating helps us make a difference. Minimum admin fees ensure donations reach veterans who need it most.</p>
<button className="bg-blue-300  px-4 py-2 rounded  text-black">Donate</button>
</div>
</div>
</div>


{/* Bottom Footer */}
<div className="w-full bg-gray-200 text-gray-600 text-sm py-6 flex flex-col items-center space-y-2">
<div className="flex space-x-4">
<a href="#">FAQ</a>
<a href="#">Privacy Policy</a>
<a href="#">Careers</a>
<a href="#">Contact Us</a>
</div>
<p>© Bayeka 2025</p>
</div>
</div>
);
}
      
  
export default Footer
