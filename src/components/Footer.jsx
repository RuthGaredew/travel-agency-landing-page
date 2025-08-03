import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white-800 text-gray-800 py-10 absolute inset-0-y botton-0 right-0 left-0 z-0 bg-white shadow-lg p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Jadoo</h2>
            <p className="mt-2 text-sm">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mr-10">
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="mr-10">
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Airline Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Mobile
                  </a>
                </li>
              </ul>
            </div>
            <div className="mr-10">
              <h3 className="font-semibold">More</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Discover our app
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Low fare tips
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end mt-6 md:mt-0">
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600  hover:text-blue-600 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 text-xl"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="text-sm mb-2 text-right">Discover our app</p>
            <div className="flex space-x-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 text-2xl"
              >
                <FaGooglePlay />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaApple />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8  pt-4 text-center text-sm">
          <p>All rights reserved &copy; jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}
