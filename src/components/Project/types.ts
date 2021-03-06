export interface ProjectComponentProps {
  images?: string[];
  id: number;
  title: string;
  link?: string;
  display?: ProjectDisplayModes;
  description?: string;
  url?: string;
}

export enum ProjectDisplayModes {
  FULL = 'full',
  PREVIEW = 'preview'
}
