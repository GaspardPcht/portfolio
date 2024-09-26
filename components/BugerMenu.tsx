import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface BurgerMenuProps {
  scrollToAbout?: () => void;
  scrollToProject?: () => void;
  scrollToContact?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  scrollToAbout,
  scrollToProject,
  scrollToContact,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden hover:bg-transparent text-3xl text-black ml-[160px] relative z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        &#9776;
      </button>
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs bg-white h-full border-l border-gray-300 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 overflow-hidden md:hidden`}
      >
        <button
          className="absolute bg-white top-4 text-black hover:bg-white right-4 text-3xl z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mt-20">
          <motion.span
            onClick={() => {
              if (scrollToAbout) scrollToAbout();
              setIsMenuOpen(false);
            }}
            className="my-4 text-xl font-semibold cursor-pointer"
          >
            About
          </motion.span>
          <motion.span
            onClick={() => {
              if (scrollToProject) scrollToProject();
              setIsMenuOpen(false);
            }}
            className="my-4 text-xl font-semibold cursor-pointer"
          >
            Projects
          </motion.span>
          <motion.span
            onClick={() => {
              if (scrollToContact) scrollToContact();
              setIsMenuOpen(false);
            }}
            className="my-4 text-xl font-semibold cursor-pointer"
          >
            Contact
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
