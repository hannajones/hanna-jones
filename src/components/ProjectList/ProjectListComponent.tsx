import * as React from 'react';

// components
// TODO: make sure always importing from index.ts/x
import Project from '../Project';

// types
import { ProjectsList } from '../../screens/Projects/ProjectsScreenTypes';

// styles
import './ProjectListStyles.scss';

interface ProjectListProps {
  projects: ProjectsList;
};

const ProjectListComponent: React.FunctionComponent<ProjectListProps> = ({ projects }) => (
  <div className="ProjectsList">
    {
      Object.keys(projects).map(key => {
        const project = projects[key];
        
        return (
          <Project
            key={project.id}
            images={project.images}
            id={project.id}
            title={project.title}
            link={`project/${project.id}`} // TODO: is there a way to use the Routes here?
          />
        )
      })
    }
  </div>
);

export default ProjectListComponent;