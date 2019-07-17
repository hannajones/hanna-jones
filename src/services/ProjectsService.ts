import firebaseService from './FirebaseService';
import { ProjectsList, ProjectItem } from '../screens/Projects/ProjectsScreenTypes';

interface ProjectData {
  [key: string]: ProjectItem;
}

interface ProjectsResponse {
  projects: ProjectData;
}

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

export async function fetchProjectsData(): Promise<ProjectsList> {
  try {
    if (projectsCache[cacheKey]) {
      return projectsCache[cacheKey];
    }

    const base = await firebaseService();
    const data: ProjectsResponse = await base.fetch(process.env.FIREBASE_PROJECTS_URL, {});
    return formatProjectsResponse(data.projects);
  } catch (error) {
    throw error;
  }
}