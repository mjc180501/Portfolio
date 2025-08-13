import React from 'react';
import { academicGroups } from '../academicdata.js';
import './Academics.css';

function Academics() {
  return (
    <div className="academics-page">
      <h1>Academics</h1>
      <p>A list of my classes, organized by subject.</p>

      <div className="academic-groups">
        {Object.entries(academicGroups).map(([groupName, classes]) => (
          <div key={groupName} className="class-group">
            <h2>{groupName}</h2>
            <div className="class-list">
              {classes.map((c, index) => (
                <div key={index} className="class-card">
                  <div className="class-header">
                    <h3>{c.name}</h3>
                    <span className={`school-tag ${c.school.toLowerCase()}`}>{c.school}</span>
                  </div>
                  <p className="class-description">{c.description}</p>
                  <p className="class-grade"><strong>Grade:</strong> {c.grade}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;