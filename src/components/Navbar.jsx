import { useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="bg-white sticky top-0">
      <div className="max-w-5xl lg:mx-60 mx-10 flex items-center justify-between h-16 drop-shadow-md">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <Link to="/" className='hover:text-orange-400'>Ryo Kurniawan</Link>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu />}
      </div>
    </nav>
  )
}

export default Navbar