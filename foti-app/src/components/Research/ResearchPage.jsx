// src/components/Research/ResearchPage.jsx

import React from 'react';
import ResearchIntro from './ResearchIntro';
import ResearchProjects from './ResearchProjects';
import ResearchAreas from './ResearchAreas';
import Publications from './Publications';
import Collaborations from './Collaborations';
import Opportunities from './Opportunities';
import Impact from './Impact';

const ResearchPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Intro Section */}
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

export default ResearchPage;
