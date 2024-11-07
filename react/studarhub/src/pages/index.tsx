// pages/index.tsx
import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash';

const HomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Define um temporizador para ocultar a splash screen após 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos

    // Limpa o temporizador quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  // Exibe a splash screen se `showSplash` estiver verdadeiro
  if (showSplash) {
    return <SplashScreen />;
  }

  // Conteúdo principal após a splash screen
  return (
    <div>
      <h1>Bem-vindo ao StudarHub!</h1>
      {/* Aqui você pode adicionar o conteúdo da tela principal */}
    </div>
  );
};

export default HomePage;
