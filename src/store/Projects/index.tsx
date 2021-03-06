import * as React from 'react';
import createProjectActions, { ProjectsActions } from './Actions';
import projectsReducer, { defaultState } from './Reducer';
import { ProjectsState } from '../../screens/Projects/ProjectsScreenTypes';

interface ProjectsContextType {
    projectsState: ProjectsState;
    projectsActions: ProjectsActions;
}

export const ProjectsContext = React.createContext<ProjectsContextType>(null);

// handling everything to do with projects data fetching/tracking here
// might want to decouple later
export const ProjectsDataProvider = ({ children }) => {
    const [projectsState, dispatch] = React.useReducer(projectsReducer, defaultState);
    const projectsActions = createProjectActions(dispatch);

    React.useEffect(() => {
        projectsActions.loadData();
    }, []);

    return (
        <ProjectsContext.Provider value={{projectsState, projectsActions}}>
            {children}
        </ProjectsContext.Provider>
    );
};
