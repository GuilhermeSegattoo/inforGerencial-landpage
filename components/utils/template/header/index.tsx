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
    <nav className="flex items-center justify-between px-14 w-full z-[99] shadow h-16 lg:h-[85px] bg-blue-800 transition-all duration-100 fixed bg-opacity-80">
      <section
        role="menubar"
        aria-label="navigation menu bar"
        className="container items-center flex justify-between"
      >
        {/* Logo */}
        <a href="#inicio">
          <div className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md">
            <h2 className="text-white text-2xl font-bold">Infor</h2>
            <h2 className="text-white text-2xl font-bold">Gerencial</h2>
          </div>
        </a>

        {/* Menu de Navegação Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <a href="https://www.inforgerencial.com.br">
            <Button appendClassName="h-10 px-8 bg-white text-blue-800 font-semibold">
              Começar Agora
            </Button>
          </a>
        </div>

        {/* Menu Mobile */}
        <section
          role="menu"
          aria-label="navigation menu button"
          className="block md:hidden"
        >
          <div
            className="text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu size={30} />
          </div>

          {/* Menu responsivo */}
          {isMenuOpen && (
            <div className="bg-black absolute top-16 left-0 w-full flex flex-col items-center justify-center">
              <Nav mode="tel" onClick={() => closeMenu()} />
            </div>
          )}
        </section>
      </section>
    </nav>
  );
};
