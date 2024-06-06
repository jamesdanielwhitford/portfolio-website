import React from 'react';
import './ProjectPage.css';
import { ChevronUpIcon, FunnelIcon, EnvelopeIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';

const ProjectPage = ({ project }) => {
  return (
    <div className="project-page">
      <div className="menu-bar">
        <button className="up-arrow"><ChevronUpIcon className="icon" /></button>
        <button className="filter-button"><FunnelIcon className="icon" /></button>
        <button className="email-button"><EnvelopeIcon className="icon" /></button>
      </div>
      <div className="project-content">
        <h2>{project.name}</h2>
        <hr />
        <div className="media-container">
          {project.media.type === 'video' ? (
            <div className="video-container">
              <img src={project.media.coverImage} alt="Video Cover" />
              <a href={project.media.link} target="_blank" rel="noopener noreferrer">Play Video</a>
            </div>
          ) : (
            <img src={project.media.url} alt="Project Media" />
          )}
          <div className="media-info">
            <span>{project.media.index}</span>
            <button className="next-media"><ChevronRightIcon className="icon" /></button>
          </div>
        </div>
        <div className="media-details">
          <p>{project.uploadDate}</p>
          <p>{project.description}</p>
        </div>
        <div className="action-buttons">
          {project.actions.map((action, index) => (
            <a key={index} href={action.link} target="_blank" rel="noopener noreferrer" className="action-button">{action.text}</a>
          ))}
        </div>
      </div>
      {project.hasNext ? (
        <button className="down-arrow"><ChevronDownIcon className="icon" /></button>
      ) : (
        <p className="no-more-projects">No more projects to display</p>
      )}
    </div>
  );
};

export default ProjectPage;