import * as React from 'react';
import { useContext } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../store/Projects';
import Card from '../../components/Card';
import LoadingIndicator from '../../components/LoadingIndicator';
import Project from '../../components/Project';

// TODO: maybe call this Components
import CloseIcon from '../../assets/icons/Close';
import Routes from '../../routes';
import { ProjectDisplayModes } from '../../components/Project/types';

interface ProjectRouteParams {
  id: string;
}

interface ProjectScreenProps extends RouteComponentProps<ProjectRouteParams> {};

// TODO: need loading here - or at the top level (data provider)
const ProjectScreen: React.FunctionComponent<ProjectScreenProps> = ({ match }) => {
  const { projectsState } = useContext(ProjectsContext);
  const project = projectsState.projects[Number(match.params.id)];

  return (
    <Card>
      <div className="projectScreen__header">
        <div className="projectScreen__header__icon">
          <Link to={Routes.PROJECTS}>
            {CloseIcon}
          </Link>
        </div>
      </div>
      {
        projectsState.loading &&
        <LoadingIndicator />
      }
      {
        project && !projectsState.loading &&
        <Project
          key={project.id}
          images={project.images}
          id={project.id}
          title={project.title}
          description={project.description}
          display={ProjectDisplayModes.FULL}
        />
      }
    </Card>
  );
}

export default withRouter(ProjectScreen);