import { useEffect, useReducer } from 'react';
import { fetchProjectsData } from '../../services/FirebaseService';
import { ProjectReducerActions, ProjectsState, ProjectReducerAction } from './ProjectsScreenTypes';

const defaultState = {
  projects: [],
  loading: false
}

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
        error: action.error
      }

    default:
      return state;
  }
}

const useProjectsReducer = () => {
  const [projectsState, dispatch] = useReducer(projectsReducer, defaultState);

  useEffect(() => {
    ProjectActions.loadData();
  }, []);

  const ProjectActions = {
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
    }
  }

  return {
    projectsState,
    ProjectActions
  }
}

export default useProjectsReducer;