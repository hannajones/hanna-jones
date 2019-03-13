import * as React from 'react';

// containers
import useProjectsReducer from './ProjectsScreenContainer';

// components
import Card from '../../newComponents/Card';
import LoadingIndicator from '../../newComponents/LoadingIndicator';
import ProjectList from '../../newComponents/ProjectList';

interface ProjectsScreenProps {};

const ProjectsScreen: React.StatelessComponent<ProjectsScreenProps> = () => {
  const { projectsState } = useProjectsReducer();

  if (projectsState.loading) {
    return ( // TODO: wrap everything in a card
      <Card>
        <LoadingIndicator />
      </Card>
    )
  }

  return (
    <Card>
      <ProjectList projects={projectsState.projects} />
    </Card>
  )
}

export default ProjectsScreen;