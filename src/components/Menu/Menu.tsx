import { IProps } from './interfaces';
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './style';
import Logo from '../Icons/Logo';
import MenuTitle from '../MenuTitle';
import MenuCard from '../MenuCard';

const Menu = ({ userName }: IProps): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <>
      <div className={cn('container')}>
        <div className="headerContent">
          <p>{userName}</p>
          <div className="avatar">
            <img src="https://picsum.photos/57/57" alt="" />
          </div>
        </div>
        <div className="dividerLine">
          <svg
            id="Component_27_1"
            data-name="Component 27 – 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="423.5"
            height="13"
            viewBox="0 0 423.5 13"
          >
            <defs>
              <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#ef9943" />
                <stop offset="0.999" stop-color="#ee5f76" />
              </linearGradient>
            </defs>
            <line id="Line_144" data-name="Line 144" x2="423" transform="translate(0.5 6)" fill="none" stroke="#707070" stroke-width="10" />
            <rect id="Rectangle_3602" data-name="Rectangle 3602" width="13" height="344.882" transform="translate(0 13) rotate(-90)" fill="url(#linear-gradient)" />
          </svg>
        </div>
        <div className="para">
          <p>noch 1 von 3 Schritten</p>
        </div>
        <div className="mainMenu">
          <MenuTitle title="VERWALTUNG" active={activeMenu} clickFunction={setActiveMenu} />
          <MenuCard title="VERWALTUNG" active={activeMenu}>
            <ul className="menuCardList">
              <li>Anstehende Events</li>
              <li>Event Entwürfe</li>
              <li>Vergangene Events</li>
              <li>Neues Event erstellen</li>
            </ul>
          </MenuCard>
          <MenuTitle title="EVENTS" active={activeMenu} clickFunction={setActiveMenu} />
          <MenuCard title="EVENTS" active={activeMenu}>
            <ul className="menuCardList">
              <li>Anstehende Events</li>
              <li>Event Entwürfe</li>
              <li>Vergangene Events</li>
              <li>Neues Event erstellen</li>
            </ul>
          </MenuCard>
          <MenuTitle title="Videos" active={activeMenu} clickFunction={setActiveMenu} />
          <MenuCard title="Videos" active={activeMenu}>
            <ul className="menuCardList">
              <li>Anstehende Events</li>
              <li>Event Entwürfe</li>
              <li>Vergangene Events</li>
              <li>Neues Event erstellen</li>
            </ul>
          </MenuCard>
          <MenuTitle title="Performance" active={activeMenu} clickFunction={setActiveMenu} />
          <MenuCard title="Performance" active={activeMenu}>
            <ul className="menuCardList">
              <li>Anstehende Events</li>
              <li>Event Entwürfe</li>
              <li>Vergangene Events</li>
              <li>Neues Event erstellen</li>
            </ul>
          </MenuCard>
          <MenuTitle title="PROFILE" active={activeMenu} clickFunction={setActiveMenu} />
          <MenuCard title="PROFILE" active={activeMenu}>
            <ul className="menuCardList">
              <li>Anstehende Events</li>
              <li>Event Entwürfe</li>
              <li>Vergangene Events</li>
              <li>Neues Event erstellen</li>
            </ul>
          </MenuCard>
        </div>
      </div>
      <style jsx={true}>{styles}</style>
    </>
  );
};

export default Menu;
