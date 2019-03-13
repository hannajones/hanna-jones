// TODO: move to another file - index.d.ts
interface ReducerAction<T> {
  type: T;
  [property: string]: any;
}

interface ErrorPayload {
  message: string;
}

interface ProjectItem {
  description: string;
  id: number;
  images?: string[];
  title: string;
  url?: string;
}

export type ProjectsList = ProjectItem[];

export interface ProjectsState {
  projects: ProjectsList;
  loading: boolean;
  error?: ErrorPayload;
  activeProject?: number;
}

export enum ProjectReducerActions {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error'
}

export type ProjectReducerAction = ReducerAction<ProjectReducerActions>;