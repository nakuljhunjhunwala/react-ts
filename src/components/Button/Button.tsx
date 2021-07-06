import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';

const Button = ({ fullWidth, primary, secondary, children, onClick, className }: IProps): JSX.Element => (
  <>
    <button
      onClick={onClick}
      className={cn('button', className, {
        'button--full-width': fullWidth,
        'button--secondary': secondary,
        'button--primary': primary,
      })}
    >
      {children}
    </button>
    <style jsx={true}>{styles}</style>
  </>
);

export default Button;
