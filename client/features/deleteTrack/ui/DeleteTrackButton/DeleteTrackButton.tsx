'use client';

import { Delete } from '@mui/icons-material';
import React, { FC } from 'react';
import { Track } from '@entities/track';
import { IconButton } from '@shared/ui';
import { useDeleteTrack } from '../../model';

type PropsType = {
  id: Track['id'];
};

export const DeleteTrackButton: FC<PropsType> = (props) => {
  const onDelete = useDeleteTrack();

  return (
    <IconButton onClick={() => onDelete(props.id)}>
      <Delete />
    </IconButton>
  );
};
