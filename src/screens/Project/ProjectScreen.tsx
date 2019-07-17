import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../store/Projects';
import Card from '../../components/Card';
import LoadingIndicator from '../../components/LoadingIndicator';
import Project from '../../components/Project';

import ChevronLeftIcon from '../../assets/icons/ChevronLeft';
import Routes from '../../routes';
import { ProjectDisplayModes } from '../../components/Project/types';

import './ProjectScreenStyles.scss';

interface ProjectRouteParams {
  id: string;
}

interface ProjectScreenProps extends RouteComponentProps<ProjectRouteParams> {};

const ProjectScreen: React.FunctionComponent<ProjectScreenProps> = ({ match }) => {
  const { projectsState } = React.useContext(ProjectsContext);
  const project = projectsState.projects[Number(match.params.id)];

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
}

export default withRouter(ProjectScreen);