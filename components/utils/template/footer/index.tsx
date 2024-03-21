import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import { RiCopyrightFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-black min-h-[200px] py-8 px-4 sm:px-2">
      <div className="container mx-auto sm:justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <a href="#inicio">
            <div className="w-64">
              <img src="assets/logo.svg" alt="logo da leadevcompany" />
            </div>
          </a>

          <div className="text-slate-400 text-sm flex flex-col gap-4">
            <h2 className="text-2xl text-white">Contato</h2>
            <div className="">
              <a href="https://wa.link/zxfllv">
                <h3>+55 (84) 99939-8021</h3>
              </a>
              <a href="mailto:contato@leadev.com.br">
                <h3>contato@leadev.com.br</h3>
              </a>
            </div>
            <div>
              <h4>Rua Francisco Mota Bairro, 572 - Pres. Costa e Silva</h4>
              <h4>Mossoró - RN, 59625-900</h4>
            </div>
            <div>
              <h4>49.284.729/0001-26</h4>
            </div>
            <div className="flex gap-2 text-lg">
              <div className="hover:text-[#D30490]">
                <a
                  href="https://www.linkedin.com/company/leadevoficial/about/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para Nosso Linkedin"
                  title="Link para Nosso Linkedin"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="hover:text-[#D30490]">
                <a
                  href="https://www.instagram.com/leadevoficial/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para Nosso Instagram"
                  title="Link para Nosso Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="hover:text-[#D30490]">
                <a
                  href="https://wa.link/zxfllv"
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
            <h2 className="text-2xl text-white">Informações</h2>
            <div className="hover:text-[#D30490]">
              <a href="#sobre">
                <h3>Sobre</h3>
              </a>
            </div>
            <div className="hover:text-[#D30490]">
              <a href="#contato">
                <h3>Fale Conosco</h3>
              </a>
            </div>
            <div className="hover:text-[#D30490]">
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
