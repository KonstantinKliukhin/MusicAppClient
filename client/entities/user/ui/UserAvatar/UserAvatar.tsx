'use client';
import React, { ComponentProps, FC } from 'react';
import { Avatar } from '@shared/ui';
import { useUser } from '../../model';

type PropsType = {
  size?: ComponentProps<typeof Avatar>['size'];
};

export const UserAvatar: FC<PropsType> = (props) => {
  const user = useUser();

  if (!user) return null;

  const avatarProps = user.avatar ? user.avatar : user.initials;

  if (typeof avatarProps === 'string') {
    return <Avatar {...props} avatar={avatarProps} />;
  }

  return <Avatar {...props} firstLetter={avatarProps[0]} secondLetter={avatarProps[1]} />;
};
