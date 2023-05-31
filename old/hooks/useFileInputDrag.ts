'use client';

import { DragEvent, DragEventHandler, useCallback, useState } from 'react';

type UseFileInputDrag = (setFile: (value: File) => void) => {
  onDrop: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragLeave: DragEventHandler;
  onDragOver: DragEventHandler;
  drag: boolean;
};

const useFileInputDrag: UseFileInputDrag = (setFile) => {
  const [drag, setDrag] = useState<boolean>(false);

  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (!file) return;

    setFile(file);
  };

  const onDrag = (value: boolean, e: DragEvent) => {
    e.preventDefault();
    setDrag(value);
  };

  const onDragStart = useCallback((e: DragEvent) => onDrag(true, e), []);
  const onDragLeave = useCallback((e: DragEvent) => onDrag(false, e), []);
  const onDragOver = useCallback((e: DragEvent) => onDrag(true, e), []);

  return {
    onDrop,
    onDragStart,
    onDragLeave,
    onDragOver,
    drag,
  };
};

export default useFileInputDrag;
