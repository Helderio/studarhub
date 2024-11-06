import React from 'react';
import Link from '../../node_modules/next/dist/client/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        {/* Links de navegação */}
        <div className="flex space-x-6">
          <Link href="/">
            <a className="hover:text-gray-400">Início</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-400">Projectos</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-400">Eventos</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-gray-400">Perfils</a>
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} StudarHub. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

