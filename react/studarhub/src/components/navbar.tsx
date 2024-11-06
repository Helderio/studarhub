import React from 'react';
import Link from '../../node_modules/next/dist/client/link';
//import Link from 'next/link';
import Logo from './logo'; // Supondo que tenha criado um componente Logo separado

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" passHref>
        <div className="cursor-pointer">
          <Logo />
        </div>
      </Link>

      {/* Links de Navegação */}
      <div className="hidden md:flex space-x-6">
        <Link href="/projects">
          <a className="text-gray-700 hover:text-blue-500">Projetos</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-700 hover:text-blue-500">Eventos</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 hover:text-blue-500">Perfil</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 hover:text-blue-500">Home</a>
        </Link>
      </div>

      {/* Botões de Login e Cadastro */}
      <div className="hidden md:flex space-x-4">
        <Link href="/login">
          <a className="text-gray-700 hover:text-blue-500">Login</a>
        </Link>
        <Link href="/signup">
          <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastro</a>
        </Link>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          {/* Ícone do menu hamburguer para mobile */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
