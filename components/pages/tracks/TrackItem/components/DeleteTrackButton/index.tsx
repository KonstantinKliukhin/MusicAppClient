'use client';

import React, { FC, useCallback, useTransition } from 'react';
import trackService from '@services/trackService';
import { Delete } from '@mui/icons-material';
import { ITrack } from '@entities/track/Track';
import { useRouter } from 'next/navigation';
import IconButton from '@uiComponents/buttons/IconButton';

type PropsType = {
  id: ITrack['id'];
};

const DeleteTrackButton: FC<PropsType> = (props) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();

  const onDelete = useCallback(async () => {
    await trackService.deleteTrack(props.id);

    startTransition(() => {
      router.refresh();
    });
  }, [props.id]);

  return (
    <IconButton onClick={onDelete}>
      <Delete />
    </IconButton>
  );
};

export default DeleteTrackButton;
