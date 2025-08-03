import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-0 bg-white shadow-lg p-4">
        <nav
          aria-label="Global"
          class="flex items-center justify-between  lg:px-3"
        >
          <div className="flex lg:flex-1">
            <img
              alt="My Company"
              src="src\assets\logo.jpg"
              className="h-8 w-auto"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          <div className={`lg:flex lg:gap-x-12 ${isOpen ? 'block' : 'hidden'} lg:block`} id="mobile-menu">
            <div className="flex flex-col lg:flex-row bg-white-800 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none">
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1" to="/">Home</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1" to="/Destinations">Destination</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1" to="/Hotels">Hotels</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1" to="/Flights">Flights</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1" to="/Booking">Booking</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 p-1 " to="/Login">Login</Link>
              <Link className="text-sm font-semibold text-gray-900 mx-3 border-1 rounded p-1" to="#">Sign up</Link>
            </div>
          </div>
        
        </nav>
      </header>
    </>
  );
}

export default Navbar;
