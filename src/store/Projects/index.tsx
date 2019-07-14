import * as React from 'react';
import { useReducer, useEffect, createContext } from 'react';
import createProjectActions, { ProjectsActions } from './Actions';
import projectsReducer, { defaultState } from './Reducer';
import { ProjectsState } from '../../screens/Projects/ProjectsScreenTypes';

interface ProjectsContextType {
    projectsState: ProjectsState;
    projectsActions: ProjectsActions;
}

// FIXME:
export const ProjectsContext = createContext<ProjectsContextType>(null);

// handling everything to do with projects data fetching/tracking here
// might want to decouple later
export const ProjectsDataProvider = ({ children }): any => {
    const [projectsState, dispatch] = useReducer(projectsReducer, defaultState);
    const projectsActions = createProjectActions(dispatch);

    // TODO: maybe actually pass something?
    useEffect(() => {
        console.log('this got called');
        projectsActions.loadData();
    }, []);

    return (
        <ProjectsContext.Provider value={{projectsState, projectsActions}}>
            {children}
        </ProjectsContext.Provider>
    )
};