import * as React from 'react';

// components
import Project from '../Project';

// types
import { ProjectsList } from '../../screens/Projects/ProjectsScreenTypes';

// styles
import './ProjectListStyles.scss';

interface ProjectListProps {
  projects: ProjectsList;
};

const ProjectListComponent: React.FunctionComponent<ProjectListProps> = ({ projects }) => (
  <div className="projectsList">
    {
      Object.keys(projects).map(key => {
        const project = projects[key];
        
        return (
          <Project
            key={project.id}
            images={project.images}
            id={project.id}
            title={project.title}
            link={`project/${project.id}`}
          />
        )
      })
    }
  </div>
);

export default ProjectListComponent;