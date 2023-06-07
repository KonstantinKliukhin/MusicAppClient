import React, { FC, PropsWithChildren } from 'react';
import { ROUTES } from '@shared/config/routes';
import { SignInButton, SignUpButton } from '../../../../features/auth';
import { ThemePicker } from '../../../../features/toggleTheme';
import { Header, NavLink } from '../../../../shared/ui';
import Layout from '@shared/ui/layout/Layout/Layout';
import { StaticBottomPlayer } from '../../../../widgets/player';


export const BaseLayout: FC<PropsWithChildren> = (props) => {
  return (
    <Layout
      headerSlot={
        <Header
          navigation={<><NavLink href={ROUTES.HOME}>Home</NavLink><NavLink href={ROUTES.TRACKS_LIST}>Tracks</NavLink></>}
          rightContent={<><SignUpButton /><SignInButton /><ThemePicker /></>}
        />
      }
      bottomSlot={<StaticBottomPlayer />}
    >
      {props.children}
    </Layout>
  );
};
