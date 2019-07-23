import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';

// components
import Card from '../../components/Card';
import Project from '../../components/Project';
import ErrorComponent from '../../components/Error';
import ChevronLeftIcon from '../../assets/icons/ChevronLeft';
import LoadingIndicator from '../../components/LoadingIndicator';

// data
import { ProjectsContext } from '../../store/Projects';

// types
import Routes from '../../routes';
import { ProjectDisplayModes } from '../../components/Project/types';

// styles
import './ProjectScreenStyles.scss';

interface ProjectRouteParams {
  id: string;
}

interface ProjectScreenProps extends RouteComponentProps<ProjectRouteParams> {}

const ProjectScreen: React.FunctionComponent<ProjectScreenProps> = ({ match }) => {
  const { projectsState } = React.useContext(ProjectsContext);
  const project = projectsState.projects[Number(match.params.id)];

  if (projectsState.error) {
    return <ErrorComponent message={projectsState.error.message} />;
  }

  return (
    <Card>
      <div className="projectScreen">
        <div className="projectScreen__header">
          <div className="projectScreen__header__icon">
            <Link to={Routes.PROJECTS} className="projectScreen__header__link">
              {ChevronLeftIcon}
              Back to projects
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
            url={project.url}
            display={ProjectDisplayModes.FULL}
          />
        }
      </div>
    </Card>
  );
};

export default withRouter(ProjectScreen);
