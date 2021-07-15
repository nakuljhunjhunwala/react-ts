import React from 'react';
import cn from 'classnames';
import styles from './style';
import UserCard from '../UserCard/';

const UserCardGrid = ({ className }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element => (
  <>
    <div className={cn(className, 'container')}>
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={1} userName="HUNDREDS" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={2} userName="NDFFGH" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={3} userName="UNS" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={4} userName="UDRES" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={5} userName="REDS" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={6} userName="HUEDS" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={7} userName="DRS" />
      <UserCard imgSrc="https://picsum.photos/54/54" indexNo={8} userName="REDS" />
    </div>
    <style jsx={true}>{styles}</style>
  </>
);

export default UserCardGrid;
