// pages/projectos.tsx
import React, { useEffect, useState } from 'react';
import { getProjects } from '@/services/firebase';

const Projectos: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectos;
