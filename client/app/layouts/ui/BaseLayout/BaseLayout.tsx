import React, { PropsWithChildren } from 'react';
import { AudioManager } from '@widgets/audioManager';
import { StaticBottomPlayer } from '@widgets/player';
import { AuthComponentMiddleware, SignInButton, SignUpButton } from '@features/auth';
import { ThemePicker } from '@features/toggleTheme';
import { UserAvatar } from '@entities/user';
import { ROUTES } from '@shared/config/routes';
import { Header, Layout, NavLink } from '@shared/ui';

export const BaseLayout = (props: PropsWithChildren) => {
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
              <AuthComponentMiddleware>
                <UserAvatar />
              </AuthComponentMiddleware>
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
