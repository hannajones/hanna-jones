import { ErrorPayload, ReducerAction } from '../../sharedTypes';

export interface ProjectItem {
  description: string;
  id: number;
  images?: string[];
  title: string;
  url?: string;
}

export interface ProjectsList {
  [key: number]: ProjectItem;
}

export interface ProjectsState {
  projects: ProjectsList;
  loading: boolean;
  error?: ErrorPayload;
  selectedProject?: number;
}

export enum ProjectReducerActions {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
  SELECT = 'select'
}

export type ProjectReducerAction = ReducerAction<ProjectReducerActions>;
