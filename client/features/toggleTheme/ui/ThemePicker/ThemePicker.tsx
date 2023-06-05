'use client';

import React, { FC, MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { LightMode } from '@mui/icons-material';
import styles from './ThemePicker.module.scss';
import { THEME_TYPE } from '../../../../shared/types/Theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { LOCAL_STORAGE_KEY_THEME } from '../../../../shared/lib';

export const ThemePicker: FC = () => {
  const domRef = useRef<HTMLElement | null>(null);
  const [currentTheme, setCurrentTheme] = useState<THEME_TYPE>(THEME_TYPE.LIGHT);

  useEffect(function getSavedTheme() {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME);
    if (savedTheme === THEME_TYPE.LIGHT || savedTheme === THEME_TYPE.DARK) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(function updateSavedTheme() {
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, currentTheme);
  }, [currentTheme]);

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

  return (
    <button>
      {isDarkMode ? (
        <DarkModeIcon onClick={onThemeIconClick} />
      ) : (
        <LightMode onClick={onThemeIconClick} className={styles.root} />
      )}
    </button>
  );
};
