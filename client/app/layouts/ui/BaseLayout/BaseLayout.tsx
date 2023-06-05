import React, { FC, PropsWithChildren } from 'react';
import Layout from '../../../../shared/ui/layout/Layout';
import { Header, NavLink } from '../../../../shared/ui';
import { ROUTES } from '../../../../../routes';
import { StaticBottomPlayer } from '../../../../widgets/player';
import { ThemePicker } from '../../../../features/toggleTheme';
import { SignInButton, SignUpButton } from '../../../../features/auth';


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
