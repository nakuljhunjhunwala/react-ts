import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const Button = ({ primary,size, children, onClick, className,letterCase }: IProps): JSX.Element => (
  <>
    <button
      onClick={onClick}
      className={cn('button', className, size,letterCase,{
        primary,
      })}
    >
      {children}
    </button>
    <style jsx={true}>{styles}</style>
  </>
);

export default Button;
