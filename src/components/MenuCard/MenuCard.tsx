import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const MenuCard = ({ title, active, children }: IProps): JSX.Element => {
  title = title.toUpperCase();

  return (
    <>
      <div className={cn('menuCard', active == title && 'active')}>{children}</div>
      <style jsx={true}>{styles}</style>
    </>
  );
};

export default MenuCard;
