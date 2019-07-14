import firebaseService from './FirebaseService';
import { ProjectsList, ProjectItem } from '../screens/Projects/ProjectsScreenTypes';

// TODO: move all Firebase stuff to another "service"
// FIXME:
interface ProjectData {
  [key: string]: ProjectItem;
}

interface ProjectsResponse {
  projects: ProjectData;
}

// TODO: reconsider cache approach, polyfill values
const projectsCache = Object.create(null);
const cacheKey = 'projects';

function formatProjectsResponse(data: ProjectData): ProjectsList {
  const formattedResponse = Object.values(data).reduce((newData, value) => {
    newData[value.id] = value;
    return newData;
  }, {});
  projectsCache[cacheKey] = formattedResponse;
  return formattedResponse;
} 

// TODO: type for error
export async function fetchProjectsData(): Promise<ProjectsList> {
  try {
    if (projectsCache[cacheKey]) {
      console.log('true', projectsCache);
      return projectsCache[cacheKey];
    }

    const data: ProjectsResponse = await firebaseService.fetch(process.env.FIREBASE_PROJECTS_URL, {});
    return formatProjectsResponse(data.projects);
  } catch (error) {
    throw error;
  }
}