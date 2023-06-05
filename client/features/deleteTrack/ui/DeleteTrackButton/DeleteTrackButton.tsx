'use client';

import React, { FC } from 'react';
import { Delete } from '@mui/icons-material';
import IconButton from '../../../../shared/ui/buttons/IconButton';
import { Track, tracksDeleteOneEffect } from '../../../../entities/track';
import { useUnit } from 'effector-react';

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
