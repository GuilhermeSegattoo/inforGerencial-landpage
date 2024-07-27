import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import { RiCopyrightFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-white min-h-[200px] py-8 px-4 sm:px-2">
      <div className="container mx-auto sm:justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <a href="#inicio">
            <div className="w-16 flex items-center gap-2">
              <h2 className="text-inforColor text-3xl">Infor </h2>
              <h2 className="text-black text-3xl">Gerencial</h2>
            </div>
            <h2 className="text-black text-1xl">Sistema de Gestão</h2>
          </a>

          <div className="text-slate-400 text-sm flex flex-col gap-4">
            <h2 className="text-2xl text-black">Contato</h2>
            <div className="">
              <a href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!">
                <h3>+55 (61) 99991-1375</h3>
              </a>
            </div>
            <div className="">
              <a href="https://wa.me/5561999281375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!">
                <h3>+55 (61) 99928-1375</h3>
              </a>
            </div>
            <div>
              <h4>Brasília - DF, 59625-900</h4>
            </div>
            <div>
              <h4>44.609.886/0001-40</h4>
            </div>
            <div className="flex gap-2 text-lg">
              <div className="hover:text-[#297ffd]">
                <a
                  href="https://www.instagram.com/inforgerencial/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para Nosso Instagram"
                  title="Link para Nosso Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="hover:text-[#297ffd]">
                <a
                  href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para Nosso Whatsapp"
                  title="Link para Nosso Whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className="text-slate-400 text-sm flex flex-col gap-4">
            <h2 className="text-2xl text-black">Informações</h2>
            <div className="hover:text-[#297ffd]">
              <a href="#sobre">
                <h3>Sobre</h3>
              </a>
            </div>
            <div className="hover:text-[#297ffd]">
              <a href="#contato">
                <h3>Fale Conosco</h3>
              </a>
            </div>
            <div className="hover:text-[#297ffd]">
              <h3 className="cursor-pointer">Termos e Condições</h3>
            </div>
          </div>
        </div>
        <div className="inline-block text-white">
          <div className="flex gap-2 justify-center items-center text-sm text-slate-400">
            <RiCopyrightFill />
            <span>Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
