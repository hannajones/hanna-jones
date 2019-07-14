export interface ProjectComponentProps {
  images?: string[];
  id: number;
  title: string;
  link?: string;
  display?: ProjectDisplayModes;
  description?: string;
};

// TODO: move this
export enum ProjectDisplayModes {
  FULL = 'full',
  PREVIEW = 'preview'
}