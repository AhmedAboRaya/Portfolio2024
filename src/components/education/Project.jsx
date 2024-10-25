// Project.js
import React from 'react';

const Project = ({ title, description }) => {
  return (
    <div className="project mb-4">
      <h4 className="font-semibold">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Project;
