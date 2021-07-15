import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const EventCard = ({ imgSrc, date, artist, location, className, primary, secondary,title }: IProps): JSX.Element => (
  <>
    <div className={cn(className, 'container', { primary, secondary })}>
      <div className="imageContainer">
        <img src={imgSrc} alt="Event Image" />
      </div>
      <div className="textContainer">
        {primary && (
          <>
            <p className="date">{date}</p>
            <p className="artist">{artist}</p>
            <p className="location">{location}</p>
          </>
        )}
        {secondary && (
          <>
            <p className="title">{title}</p>
          </>
        )}
      </div>
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default EventCard;
