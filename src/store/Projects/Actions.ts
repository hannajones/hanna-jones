import { ProjectReducerActions } from "../../screens/Projects/ProjectsScreenTypes";
import { fetchProjectsData } from "../../services/ProjectsService";

export interface ProjectsActions {
  loadData: () => Promise<void>;
  selectProject: any;
}

// FIXME: dispatch generic
function createProjectActions(dispatch: React.Dispatch<any>): ProjectsActions {
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
        })
      }
    },
    // TODO: type for event
    selectProject: (event) => {
      event.preventDefault();
      console.log('event', event);
    }
  }
};

export default createProjectActions;