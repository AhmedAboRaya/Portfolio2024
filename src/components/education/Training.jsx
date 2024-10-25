// Training.js
import React from 'react';

const Training = ({ description, experience, certification }) => {
  return (
    <div className="training">
      <p><strong>Training Content:</strong> {description}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Certification:</strong> {certification}</p>
    </div>
  );
};

export default Training;
