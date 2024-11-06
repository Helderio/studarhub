// src/pages/_app.tsx
//import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { AppProps } from '../../node_modules/next/dist/shared/lib/router/router';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* Cabeçalho comum em todas as páginas */}
      <Navbar />

      {/* Renderiza o componente da página atual */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Rodapé comum em todas as páginas (opcional) */}
      <Footer />
    </>
  );
};

export default MyApp;
