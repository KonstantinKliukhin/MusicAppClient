import React, { FC, PropsWithChildren } from 'react';
import Layout from '../../../shared/ui/layout/Layout';
import { Header } from '../../../shared/ui/layout/Header/Header';
import { ROUTES } from '../../../../routes';
import { NavLink } from '../../../shared/ui';

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
          rightContent={<div />}
        />
      }
      bottomSlot={<div />}
    >
      {props.children}
    </Layout>
  );
};
