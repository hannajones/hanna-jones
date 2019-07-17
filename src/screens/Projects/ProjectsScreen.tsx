import * as React from 'react';

// containers
import { ProjectsContext } from '../../store/Projects';

// components
import Card from '../../components/Card';
import LoadingIndicator from '../../components/LoadingIndicator';
import ProjectList from '../../components/ProjectList';

interface ProjectsScreenProps {};

const ProjectsScreen: React.FunctionComponent<ProjectsScreenProps> = () => {
  const { projectsState } = React.useContext(ProjectsContext);

  const innerContent = projectsState.loading ? <LoadingIndicator/> : <ProjectList projects={projectsState.projects} />

  return (
    <Card>
      {innerContent}
    </Card>
  )
}

export default ProjectsScreen;