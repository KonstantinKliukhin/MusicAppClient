import React, { FC } from 'react';
import { Avatar } from '@shared/ui';
import { User } from '../../model';

type PropsType = {
  user: User;
};

export const UserAvatar: FC<PropsType> = (props) => {
  const avatarProps = props.user.avatar ? props.user.avatar : props.user.initials;

  if (typeof avatarProps === 'string') {
    return <Avatar avatar={avatarProps} />;
  }

  return <Avatar firstLetter={avatarProps[0]} secondLetter={avatarProps[1]} />;
};
