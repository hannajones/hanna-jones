import * as React from 'react';

interface ResumeSectionProps {
  title: string;
}

const ResumeSection: React.FunctionComponent<ResumeSectionProps> = ({ title, children }) => (
  <div className="resume__section">
    <h2 className="resume__section__title text--red">{title}</h2>
    {children}
  </div>
);

export default ResumeSection;
