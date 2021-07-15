import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';
import Logo from '../Icons/Logo';

const Footer = (): // { }: IProps
JSX.Element => (
  <>
    <div className="container">
    <div className="logo grey">
          <Logo />
        </div>
      <div className="searchBar">
        <label>
          <input type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24.338" height="23.849" viewBox="0 0 24.338 23.849">
            <path
              id="Union_2"
              data-name="Union 2"
              d="M-4669.655,1.809l6.561,6.611Zm-13.777,0a9.4,9.4,0,0,1,0-13.222,9.228,9.228,0,0,1,13.122,0,9.4,9.4,0,0,1,0,13.222,9.216,9.216,0,0,1-6.562,2.738A9.212,9.212,0,0,1-4683.432,1.809Z"
              transform="translate(4686.9 14.901)"
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
            />
          </svg>
        </label>
      </div>
      <div className="links">
        <ul>
          <a href="/test">
            <li>BLOG</li>
          </a>
          <a href="/test">
            <li>LIVEGIX</li>
          </a>
          <a href="/test">
            <li>PLAYLISTS</li>
          </a>
          <a href="/test">
            <li>DASHBOARD</li>
          </a>
          <a href="/test">
            <li>LOGOUT</li>
          </a>
        </ul>
      </div>
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default Footer;
