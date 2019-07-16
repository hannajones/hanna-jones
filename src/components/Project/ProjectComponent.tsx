import * as React from 'react';
import * as cx from 'classnames';
import { ProjectComponentProps, ProjectDisplayModes } from './types';
import Carousel from '../Carousel';

import './ProjectStyles.scss';

const ProjectComponent: React.FunctionComponent<ProjectComponentProps> = ({ images, title, description, url, display = ProjectDisplayModes.PREVIEW }) => {
  const isFullView = display === ProjectDisplayModes.FULL;

  return (
    <div className={cx('project', `project--${display}`)}>
      {
        images && !isFullView ?
        <img className="project__image" src={images[0]} alt={title} /> :
        <Carousel images={images} />
      }
      <div className="project__title">
      {
        isFullView && url ?
        <a className="project__title__link" href={url} target="__blank">
          <mark className="project__title__mark">{title}</mark>
        </a> :
        <mark className="project__title__mark">{title}</mark>
      }
      </div>
      {
        description && isFullView &&
        <div className="project__description">
          {description}
        </div>
      }
    </div>
  )
};

export default ProjectComponent;