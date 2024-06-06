import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import { getProjectsFromFirestore } from '../firebase';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjectsFromFirestore();
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="app">
      <div className="scroll-container">
        <LandingPage />
        {projects.map((project, index) => (
          <ProjectPage key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;