import { } from "module";

// src/pages/signup.tsx

import Link from '../../node_modules/next/dist/client/link';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Logo from '../components/logo';

const Cadastro: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Logo do site */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Formulário de Cadastro */}
      <form className="flex flex-col items-center w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Instituto"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Curso"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="w-full flex items-center mb-4">
          <span className="p-3 border border-gray-300 rounded-l-lg bg-gray-100">+244</span>
          <input
            type="tel"
            placeholder="Contacto"
            className="w-full p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full p-3 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 font-bold"
        >
          Cadastrar
        </button>
      </form>

      {/* Ícones para redes sociais */}
      <div className="flex justify-center space-x-6 mt-4">
        <FaFacebook size={24} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <FaGoogle size={24} className="text-gray-600 hover:text-red-600 cursor-pointer" />
        <FaTwitter size={24} className="text-gray-600 hover:text-blue-400 cursor-pointer" />
      </div>

      {/* Link para a tela de login */}
      <Link href="/login">
        <a className="mt-4 text-blue-500 hover:underline font-bold">
          Já tem conta? Faça login
        </a>
      </Link>
    </div>
  );
};

export default Cadastro;






