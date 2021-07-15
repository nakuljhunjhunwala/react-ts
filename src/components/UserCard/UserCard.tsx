import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const UserCard = ({ imgSrc, indexNo, userName }: IProps): JSX.Element => (
  <>
    <div className="container">
      <div className="indexNo">
        <p>{indexNo}.</p>
      </div>
      <div className="userName">
        <div className="avatar">
          <img src={imgSrc} alt="User Photo" />
        </div>
        <p>{userName} </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="9.29" height="17.166" viewBox="0 0 9.29 17.166">
          <path id="Path_1551" data-name="Path 1551" d="M0,0,8.229,8.23,0,16.459" transform="translate(0.354 0.354)" fill="none" stroke="#a8a8a8" stroke-width="1" />
        </svg>
      </div>
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default UserCard;
