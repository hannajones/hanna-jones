import { ProjectsState, ProjectReducerAction, ProjectReducerActions } from '../../screens/Projects/ProjectsScreenTypes';

export const defaultState: ProjectsState = {
  projects: [],
  loading: false
};

function projectsReducer(state: ProjectsState, action: ProjectReducerAction): ProjectsState {
  switch (action.type) {
    case ProjectReducerActions.LOADING:
      return {
        ...state,
        loading: true
      };

    case ProjectReducerActions.LOADED:
      return {
        ...state,
        loading: false,
        projects: action.projects
      };

    case ProjectReducerActions.ERROR:
      return {
        ...state,
        loading: false,
        error: {
          message: action.error
        }
      };

    case ProjectReducerActions.SELECT:
      return {
        ...state,
        selectedProject: action.project
      };

    default:
      return state;
  }
}

export default projectsReducer;
