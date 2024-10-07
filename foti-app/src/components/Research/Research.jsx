// src/components/Research/Research.jsx

import React from 'react';
import ResearchIntro from './ResearchIntro';
import ResearchAreas from './ResearchAreas';
import ResearchProjects from './ResearchProjects';
import Publications from './Publications';
import Collaborations from './Collaborations';
import Opportunities from './Opportunities';
import Impact from './Impact';

const Research = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Introduction Section */}
      <ResearchIntro />

      {/* Research Areas */}
      <ResearchAreas />

      {/* Current Projects */}
      <ResearchProjects />

      {/* Publications */}
      <Publications />

      {/* Collaborations */}
      <Collaborations />

      {/* Opportunities */}
      <Opportunities />

      {/* Research Impact */}
      <Impact />
    </div>
  );
};

export default Research;
