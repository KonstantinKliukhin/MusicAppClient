'use client';

import React, { FC, MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { LightMode } from '@mui/icons-material';
import styles from './ThemePicker.module.scss';
import { THEME_TYPE } from '@commonTypes/Theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemePicker: FC = () => {
  const domRef = useRef<HTMLElement | null>(null);
  const [currentTheme, setCurrentTheme] = useState<THEME_TYPE>(THEME_TYPE.LIGHT);

  useEffect(() => {
    if (!process.browser) return;

    domRef.current = document?.documentElement;
  }, []);

  useEffect(() => {
    if (!domRef.current) return;
    if (!domRef.current.classList.length) {
      domRef.current.classList.add(THEME_TYPE.LIGHT);
    }
  }, [domRef]);

  const onThemeIconClick: MouseEventHandler = () => {
    if (!domRef.current) return;
    if (domRef.current.classList.contains(THEME_TYPE.DARK)) {
      domRef.current.classList.replace(THEME_TYPE.DARK, THEME_TYPE.LIGHT);
      setCurrentTheme(THEME_TYPE.LIGHT);
    } else {
      domRef.current.classList.replace(THEME_TYPE.LIGHT, THEME_TYPE.DARK);
      setCurrentTheme(THEME_TYPE.DARK);
    }
  };

  const isDarkMode = useMemo(() => currentTheme === THEME_TYPE.DARK, [currentTheme]);

  return isDarkMode ? (
    <DarkModeIcon onClick={onThemeIconClick} />
  ) : (
    <LightMode onClick={onThemeIconClick} className={styles.root} />
  );
};
