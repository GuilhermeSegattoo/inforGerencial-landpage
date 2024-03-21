import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../../button";
import { Nav } from "./nav";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-center cel:px-5 px-14 w-full z-[99] shadow h-16 lg:h-[85px] bg-black transition-all duration-100 fixed bg-opacity-80">
      <section
        role="menubar"
        aria-label="navigation menu bar"
        className="container items-center flex cel:justify-center tab:justify-between lap:justify-between"
      >
        <a href="#inicio">
          <div className="w-52 cel:flex cel:justify-center cel:items-center cel:text-center lap:">
            <img src="assets/logo.svg" alt="logo" />
          </div>
        </a>

        <Nav />
        <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
          <a href="#contato">
            <Button appendClassName="h-6 w-48">
              <p className="text-white">Entre em contato</p>
            </Button>
          </a>
        </div>
      </section>
      <section
        role="menu"
        aria-label="navigation menu button"
        className="block cel:inline-block tab:hidden lap:hidden xl:hidden"
      >
        <div
          className="text-[#D30490] cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <GiHamburgerMenu size={30} />
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black absolute top-16 left-0 w-full flex flex-col items-center justify-center ">
            <Nav mode="tel" onClick={() => closeMenu()} />
          </div>
        )}
      </section>
    </nav>
  );
};
