// import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50">
      <div className="max-w-full m-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">
          
          <div className="flex items-center mr-6">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg"
              alt="Lamborghini Logo"
              className="h-15"
            />
          </div>

          <div className="sm:flex sm:space-x-8 sm:w-auto text-start">
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium hover:underline"
            >
              MODELS
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              BEYOND
            </a>
            <a
              href="/services"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              OWNERSHIP
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              MOTORSPORT
            </a>
          </div>

          {/* Right Menu Items */}
          <div className="hidden sm:flex sm:space-x-8 sm:w-auto ml-auto">
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              DEALERSHIPS
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              MUSEUM
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              STORE
            </a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.48"
                height="20.219"
                viewBox="0 0 21.48 20.219"
                className="fill-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.48"
                  height="20.219"
                  viewBox="0 0 21.48 20.219"
                >
                  <g transform="translate(-700.152 -165)">
                    <g transform="translate(700.152 165)">
                      <path
                        d="M706.44,182.9l-2.03,2.034a.737.737,0,0,1-.661.276.775.775,0,0,1-.319-.663c.011-.535,0-1.069,0-1.628l-.3-.019a8.058,8.058,0,0,1-1.168-.083,2.3,2.3,0,0,1-1.8-2.257c0-1.842.025-3.685-.01-5.527a2.4,2.4,0,0,1,2.386-2.411c.2,0,.389,0,.614,0v-.288q0-2.141,0-4.281A3,3,0,0,1,706.2,165q6.218,0,12.436,0a2.971,2.971,0,0,1,2.975,2.867c.035,1.546.013,3.094.012,4.642,0,1.124.009,2.25-.016,3.374a2.988,2.988,0,0,1-2.59,2.724c-.5.04-1.01.029-1.515.041-.1,0-.2,0-.328,0v.283q0,1.122,0,2.243c0,.2.045.442-.2.529a.644.644,0,0,1-.683-.177c-.706-.692-1.4-1.4-2.1-2.1-.052-.05-.107-.1-.2-.183,0,.45,0,.853,0,1.257a2.368,2.368,0,0,1-1.886,2.341,2.9,2.9,0,0,1-.608.052q-2.378.007-4.757,0Zm9.852-2.84c0-.656,0-1.242,0-1.83,0-.4.176-.578.58-.582.513,0,1.027,0,1.54,0a3.664,3.664,0,0,0,.676-.031,2,2,0,0,0,1.645-2.01c0-2.514-.015-5.029.009-7.542a2.073,2.073,0,0,0-2.112-2.093q-6.2.005-12.39.006a2.354,2.354,0,0,0-.58.073,2.032,2.032,0,0,0-1.531,2.044q0,3.148.018,6.3c0,.438,0,.876.006,1.314a2.031,2.031,0,0,0,2.053,1.946c2.393-.02,4.787-.006,7.18-.007a1.1,1.1,0,0,1,.845.345C714.892,178.671,715.57,179.337,716.292,180.061Zm-3.182-1.406h-.322q-3.16,0-6.319,0a6.871,6.871,0,0,1-.743-.043,3.012,3.012,0,0,1-2.574-2.855c0-.627,0-1.253,0-1.88,0-.08-.007-.159-.011-.251-.222,0-.418,0-.613,0a1.385,1.385,0,0,0-1.393,1.417q0,2.719,0,5.436a1.3,1.3,0,0,0,1.1,1.373,6.592,6.592,0,0,0,1.419.045.7.7,0,0,1,.785.789c-.024.295,0,.592,0,.891l1.59-1.561c.1-.006.193-.016.289-.016h2.628c.952,0,1.9.007,2.854-.008a1.318,1.318,0,0,0,1.284-1.15c.05-.546.026-1.1.034-1.65C713.112,179.019,713.11,178.847,713.11,178.655Z"
                        transform="translate(-700.152 -165)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.283"
                height="18.023"
                viewBox="0 0 17.283 18.023"
                className="fill-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.283"
                  height="18.023"
                  viewBox="0 0 17.283 18.023"
                >
                  <g transform="translate(-1463.392 -389.942)">
                    <g>
                      <path d="M1470.762,390.983a6.426,6.426,0,1,0,6.425,6.425,6.432,6.432,0,0,0-6.425-6.425m0,13.7a7.37,7.37,0,1,1,7.37-7.37,7.379,7.379,0,0,1-7.37,7.37"></path>
                    </g>
                    <rect
                      width="0.944"
                      height="7.181"
                      transform="translate(1475.069 402.736) rotate(-43.24)"
                    ></rect>
                  </g>
                </svg>
              </svg>
            </button>
            <button className="flex flex-col justify-center items-center space-y-1">
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </button>
          </div>

          {/* Hamburger Menu (Mobile)
          <div className="sm:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
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
                    d="M4 6h16 M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
