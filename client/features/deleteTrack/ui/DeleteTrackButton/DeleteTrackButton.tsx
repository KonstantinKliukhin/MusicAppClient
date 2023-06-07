'use client';

import { Delete } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { Track, tracksDeleteOneEffect } from '../../../../entities/track';
import IconButton from '@shared/ui/buttons/IconButton/IconButton';

type PropsType = {
  id: Track['id'];
};

export const DeleteTrackButton: FC<PropsType> = (props) => {
  const onDelete = useUnit(tracksDeleteOneEffect);

  return (
    <IconButton onClick={() => onDelete(props.id)}>
      <Delete />
    </IconButton>
  );
};
