import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const MenuTitle = ({ title, active, clickFunction }: IProps): JSX.Element => {
  title = title.toUpperCase();

  return (
    <>
      <div
        className={cn('menuTitle', active == title && 'active')}
        onClick={() => {
          if (active == title) {
            clickFunction('');
          } else {
            clickFunction(title);
          }
        }}
      >
        <p>{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12.2" height="22.986" viewBox="0 0 12.2 22.986">
          <g id="Group_1825" data-name="Group 1825" transform="translate(-383.166 -368.38)">
            <line
              id="Line_145"
              data-name="Line 145"
              x2="15.253"
              transform="translate(383.873 390.659) rotate(-45)"
              fill="none"
              stroke="#707070"
              stroke-linecap="square"
              stroke-width="1"
            />
            <line
              id="Line_146"
              data-name="Line 146"
              y2="15.253"
              transform="translate(383.873 369.087) rotate(-45)"
              fill="none"
              stroke="#707070"
              stroke-linecap="square"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>

      <style jsx={true}>{styles}</style>
    </>
  );
};

export default MenuTitle;
