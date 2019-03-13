import * as React from 'react';

// components
import Project from '../Project/ProjectComponent';

// types
import { ProjectsList } from '../../screens/Projects/ProjectsScreenTypes';

// styles
import './ProjectListStyles.scss';

interface ProjectListProps {
  projects: ProjectsList;
};

const ProjectListComponent: React.StatelessComponent<ProjectListProps> = ({ projects }) => (
  <div className="ProjectsList">
    {
      projects.map(project => (
        <Project
          key={project.id}
          src={project.images && project.images[0]}
          id={project.id}
          title={project.title}
        />
      ))
    }
  </div>
);

export default ProjectListComponent;