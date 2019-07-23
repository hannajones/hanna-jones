import * as React from 'react';
import * as cx from 'classnames';

// components
import Carousel from '../Carousel';

// types
import { ProjectComponentProps, ProjectDisplayModes } from './types';

// styles
import './ProjectStyles.scss';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImageComponent';

const ProjectComponent: React.FunctionComponent<ProjectComponentProps> = ({ images, title, description, url, display = ProjectDisplayModes.PREVIEW }) => {
  const isFullView = display === ProjectDisplayModes.FULL;

  return (
    <div className={cx('project', `project--${display}`)}>
      {
        images && !isFullView ?
        <ProgressiveImage main={{ src: images[0], alt: title }} className="project__image" /> :
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
  );
};

export default ProjectComponent;
