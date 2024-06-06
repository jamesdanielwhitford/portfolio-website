// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsList = querySnapshot.docs.map(doc => doc.data());
      setProjects(projectsList);
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