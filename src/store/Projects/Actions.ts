import { ProjectReducerActions, ProjectReducerAction } from '../../screens/Projects/ProjectsScreenTypes';
import { fetchProjectsData } from '../../services/ProjectsService';

export interface ProjectsActions {
  loadData: () => Promise<void>;
}

function createProjectActions(dispatch: React.Dispatch<ProjectReducerAction>): ProjectsActions {
  return {
    loadData: async () => {
      dispatch({ type: ProjectReducerActions.LOADING });

      try {
        const projects = await fetchProjectsData();

        dispatch({
          type: ProjectReducerActions.LOADED,
          projects
        });
      } catch (error) {
        dispatch({
          type: ProjectReducerActions.ERROR,
          error
        });
      }
    }
  };
}

export default createProjectActions;
