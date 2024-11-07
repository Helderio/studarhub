// app/StudarHub.tsx
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type StudarHubProps = {
  children: React.ReactNode;
};

const StudarHub: React.FC<StudarHubProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default StudarHub;
