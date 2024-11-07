// pages/login.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import Link from 'next/link';
import { auth } from '../services/firebase';
import Link from '../../node_modules/next/link';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Login realizado com sucesso!');
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
        >
          Entrar
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

        {/* Botão "Esqueci a senha" */}
        <div className="mt-4 text-right">
          <Link href="/forgot-password">
            <a className="text-sm text-blue-500 hover:underline">Esqueci a senha</a>
          </Link>
        </div>

        {/* Link para a tela de cadastro */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link href="/signup">
              <a className="text-blue-500 hover:underline">Cadastre-se</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
