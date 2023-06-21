'use client';
import React, { FC } from 'react';
import { useUser } from '../../model';

export const UserAvatar: FC = () => {
  const user = useUser();

  if (!user) return null;

  return null;

  // const avatarProps = user.avatar ? user.avatar : user.initials;
  //
  // if (typeof avatarProps === 'string') {
  //   return <Avatar avatar={avatarProps} />;
  // }
  //
  // console.log(user, user.initials, user.avatar);
  //
  // return <Avatar firstLetter={avatarProps[0]} secondLetter={avatarProps[1]} />;
};
