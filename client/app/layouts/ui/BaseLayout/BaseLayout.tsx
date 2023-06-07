import React, { FC, PropsWithChildren } from 'react';
import { AudioManager } from '@widgets/audioManager';
import { StaticBottomPlayer } from '@widgets/player';
import { SignInButton, SignUpButton } from '@features/auth';
import { ThemePicker } from '@features/toggleTheme';
import { ROUTES } from '@shared/config/routes';
import { Header, Layout, NavLink } from '@shared/ui';

export const BaseLayout: FC<PropsWithChildren> = (props) => {
  return (
    <Layout
      headerSlot={
        <Header
          navigation={
            <>
              <NavLink href={ROUTES.HOME}>Home</NavLink>
              <NavLink href={ROUTES.TRACKS_LIST}>Tracks</NavLink>
            </>
          }
          rightContent={
            <>
              <SignUpButton />
              <SignInButton />
              <ThemePicker />
            </>
          }
        />
      }
      bottomSlot={
        <AudioManager>
          <StaticBottomPlayer />
        </AudioManager>
      }
    >
      {props.children}
    </Layout>
  );
};
