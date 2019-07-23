import * as React from 'react';

interface ResumeContentProps {
  title: string;
  location?: string;
  locationLink?: string;
  dates?: string;
  descriptions: string[];
}

const ResumeContent: React.FunctionComponent<ResumeContentProps> = ({ title, location, locationLink, dates, descriptions }) => (
  <div className="resume__content">
    <h3 className="resume__content__title text--orange">
      {title}
    </h3>
    <div className="resume__content__container">
      {
        location && locationLink &&
        <a className="resume__content__location text--purple" href={locationLink} target="__blank">
          {location}
        </a>
      }
    </div>
    {
      dates &&
      <em className="resume__content__dates">
        {dates}
      </em>
    }
    <ul className="resume__content__descriptions">
      {
        descriptions.map((description, index) => (
          <li key={index}>
            <p className="resume__content__description">
              {description}
            </p>
          </li>
        ))
      }
    </ul>
  </div>
);

export default ResumeContent;
