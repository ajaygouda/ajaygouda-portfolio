import React from 'react';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { EducationAndInterests } from '../components/EducationAndInterests';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="">
      <ExperienceTimeline />
      <EducationAndInterests />
    </div>
  );
};
