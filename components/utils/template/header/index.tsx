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
    <nav className="flex items-center justify-center cel:px-5 px-14 w-full z-[99] shadow h-16 lg:h-[85px] bg-blue-800 transition-all duration-100 fixed bg-opacity-80">
      <section
        role="menubar"
        aria-label="navigation menu bar"
        className="container items-center flex cel:justify-center tab:justify-between lap:justify-between"
      >
        <a href="#inicio">
          <div className="w-14 flex items-center gap-2 bg-white">
          <h2 className="text-inforColor text-2xl">Infor </h2>
            <h2 className="text-white text-2xl">Gerencial</h2>
          </div>
        </a>

        <Nav />
        <div className="cel:hidden tab:inline-block lap:inline-block xl:inline-block">
          <a href="https://www.inforgerencial.com.br">
            <Button appendClassName="h-10 w-30">
              <h1 className="text-blue-800 text-xl">Acessar</h1>
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
          className="text-inforColor cursor-pointer"
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
