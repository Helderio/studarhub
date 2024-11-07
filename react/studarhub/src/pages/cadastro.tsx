// pages/signup.tsx
import React, { useState } from 'react';
//import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import Link from '../../node_modules/next/link';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [institute, setInstitute] = useState('');
  const [course, setCourse] = useState('');
  const [contact, setContact] = useState('+244');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Cadastro realizado com sucesso!');
    } catch (err) {
      setError('Erro ao criar conta. Verifique as informações.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
      <form onSubmit={handleSignup} className="w-full max-w-sm bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Instituto</label>
          <input
            type="text"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Curso</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contato</label>
          <div className="flex">
            <span className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-l">+244</span>
            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-r"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
        >
          Cadastrar
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

        {/* Link para a tela de login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login">
              <a className="text-blue-500 hover:underline">Entre aqui</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;






