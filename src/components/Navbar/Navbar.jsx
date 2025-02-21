import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import LanguageSwitcher from '../Dropdown/LanguageSwitcher';
import CurrencySwitcher from '../Dropdown/CurrencySwitcher ';


const Navbar = () => {
  return (
    <div className='flex flex-col'>
        {/* Top Navbar */}
        <div className='flex justify-between items-center ml-15 mr-15'>
            <div className='flex gap-3 text-xl'>
                <FaFacebook className='hover:bg-[#FF69B4] hover:text-white rounded cursor-pointer transition-transform duration-500'/>
                <FaInstagram className='hover:bg-[#FF69B4] hover:text-white rounded cursor-pointer transition-transform duration-500'/>
                <FaLinkedin className='hover:bg-[#FF69B4] hover:text-white rounded cursor-pointer transition-transform duration-500'/>
                <FaTwitter className='hover:bg-[#FF69B4] hover:text-white rounded cursor-pointer transition-transform duration-500'/>
            </div>
            <div>
                <p>Free Shipping This Week Order Over - $55</p>
            </div>
            <div>
                <LanguageSwitcher/>
                <CurrencySwitcher/>
            </div>
        </div>
        <hr />
        {/* Middle Navbar */}
        <div className='flex justify-between mx-10 py-6'>
            <div>Logo</div>
            <div>Search</div>
            <div>icon</div>
        </div>
        <hr />
        {/* Bottom Navbar */}
        <div>
            Bottom
        </div>

    </div>
  )
}

export default Navbar
