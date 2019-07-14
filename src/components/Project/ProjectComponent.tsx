import * as React from 'react';
import * as cx from 'classnames';
import { ProjectComponentProps, ProjectDisplayModes } from './types';

import './ProjectStyles.scss';

// TODO: this project should be re-usable (for both the Projects and the project screen)
// will conditionally show more data if selected
const ProjectComponent: React.FunctionComponent<ProjectComponentProps> = ({ images, title, description, display = ProjectDisplayModes.PREVIEW }) => (
  <div className={cx('Project', `Project--${display}`)}>
    {
      images && display === ProjectDisplayModes.PREVIEW ?
      <img className="Project__img" src={images[0]} alt={title} /> :
      images.map(image => (
        <img className="Project__img" src={image} alt={title} key={image} />
      ))
    }
    <span className="Project__title">
      <mark className="Project__title__mark">{title}</mark>
    </span>
    {
      description && display === ProjectDisplayModes.FULL &&
      <div className="project__description">
        {description}
      </div>
    }
  </div>
);

export default ProjectComponent;