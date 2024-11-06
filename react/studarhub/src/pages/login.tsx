
// src/pages/login.tsx

import Link from '../../node_modules/next/dist/client/link';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Logo from '../components/logo';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Logo do site */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Formulário de Login */}
      <form className="flex flex-col items-center w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full p-3 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 font-bold"
        >
          Login
        </button>
      </form>

      {/* Ícones para redes sociais */}
      <div className="flex justify-center space-x-6 mt-4">
        <FaFacebook size={24} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <FaGoogle size={24} className="text-gray-600 hover:text-red-600 cursor-pointer" />
        <FaTwitter size={24} className="text-gray-600 hover:text-blue-400 cursor-pointer" />
      </div>

      {/* Link para a tela de cadastro */}
      <Link href="/signup">
        <a className="mt-4 text-blue-500 hover:underline font-bold">
          Não tem conta? Cadastre-se
        </a>
      </Link>
    </div>
  );
};

export default LoginPage;
