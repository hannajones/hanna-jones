import * as React from 'react';

// containers
import { ProjectsContext } from '../../store/Projects';

// components
import Card from '../../components/Card';
import LoadingIndicator from '../../components/LoadingIndicator';
import ProjectList from '../../components/ProjectList';
import ErrorComponent from '../../components/Error';

interface ProjectsScreenProps {}

const ProjectsScreen: React.FunctionComponent<ProjectsScreenProps> = () => {
  const { projectsState } = React.useContext(ProjectsContext);
  const innerContent = projectsState.loading ? <LoadingIndicator/> : <ProjectList projects={projectsState.projects} />;

  if (projectsState.error) {
    return <ErrorComponent message={projectsState.error.message} />;
  }

  return (
    <Card>
      {innerContent}
    </Card>
  );
};

export default ProjectsScreen;
