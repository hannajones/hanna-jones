import * as React from 'react';

import './ProjectStyles.scss';

interface ProjectComponentProps {
  src?: string;
  id: number;
  title: string;
};

const ProjectComponent: React.StatelessComponent<ProjectComponentProps> = ({ src, title }) => (
  <div className="Project">
    <img className="Project__img" src={src} alt={title} />
    <span className="Project__title">
      <mark className="Project__title__mark">{title}</mark>
    </span>
  </div>
);

export default ProjectComponent;