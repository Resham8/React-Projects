import { useState } from "react";
import { Search, MessageCircle, Menu, X, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#181818] text-white z-50">
      <div className="max-w-full m-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">
          {/* Logo */}
          <div className="flex items-center mr-6">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg"
              alt="Lamborghini Logo"
              className="h-15"
            />
          </div>

          
          <div className="hidden md:flex md:space-x-8 md:w-auto text-start">
            <a
              href="/"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              MODELS
            </a>

            <a
              href="/about"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              BEYOND
            </a>
            <a
              href="/services"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              OWNERSHIP
            </a>
            <a
              href="/contact"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              MOTORSPORT
            </a>
          </div>

          
          <div className="hidden md:flex md:space-x-8 md:w-auto ml-auto">
            <a
              href="/"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              DEALERSHIPS
            </a>
            <a
              href="/"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              MUSEUM
            </a>
            <a
              href="/"
              className="block relative py-2 text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              STORE
            </a>
            <button>
              <MessageSquare size={21} color="white" />
            </button>
            <button>
              <Search size={21} color="white" />
            </button>
            <button className="flex flex-col justify-center items-center space-y-1">
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#181818]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              MODELS
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              BEYOND
            </a>
            <a
              href="/services"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              OWNERSHIP
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              MOTORSPORT
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              DEALERSHIPS
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              MUSEUM
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-zinc-700 rounded-md"
            >
              STORE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
