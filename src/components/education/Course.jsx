// Course.js
import React from 'react';

const Course = ({ title, content, projects, channels, instructor }) => {
  return (
    <div className="course mb-4">
      <h4 className="font-semibold">{title}</h4>
      <p><strong>Content Covered:</strong> {content}</p>
      {projects && <p><strong>Projects:</strong> {projects}</p>}
      {channels && <p><strong>Primary Channels:</strong> {channels}</p>}
      {instructor && <p><strong>Instructor:</strong> {instructor}</p>}
    </div>
  );
};

export default Course;
