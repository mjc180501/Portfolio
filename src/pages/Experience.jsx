import React, { useState } from 'react';
import FireworksComponent from '../components/Fireworks';
import './Experience.css';

function Experience() {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleDownload = () => {
    setShowFireworks(true);
    // Trigger the file download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="experience-page">
      <h1>Work Experience</h1>
      <p>Here's a list of my professional experience...</p>
      {/* Add your job descriptions here */}
      <div className="resume-section">
        <h2>Download My Resume</h2>
        <button onClick={handleDownload} className="download-button">
          Download PDF
        </button>
      </div>
      {showFireworks && <FireworksComponent onFinish={() => setShowFireworks(false)} />}
    </div>
  );
}

export default Experience;