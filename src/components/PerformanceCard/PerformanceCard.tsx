import { IProps } from './interfaces';
import React from 'react';
import cn from 'classnames';
import styles from './style';
import Increment from '../Icons/Increment';
import Decrement from '../Icons/Derement';

const PerformanceCard = ({ title, className, titleIcon, amount, amountPara, percentage, percentageType, }: IProps): JSX.Element => (
  <>
    <div className={cn('container', className)}>
      <div className="heading">
        {titleIcon}
        <p>{title}</p>
      </div>
      <div className="amount">
        <p>{amount}</p>
        <span>{amountPara}</span>
      </div>
      <div className={cn("percentage",percentageType)}>
        {percentageType == 'increment' ? <Increment /> : <Decrement />}
        <p>{percentage}</p>
      </div>
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default PerformanceCard;
