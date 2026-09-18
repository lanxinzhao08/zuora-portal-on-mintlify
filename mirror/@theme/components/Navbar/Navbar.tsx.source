import React from 'react';
import Helmet from 'react-helmet';

import type { JSX } from 'react';
import { Banner } from '@redocly/theme/components/Banner/Banner';
import { NavbarProps } from '@redocly/theme/components/Navbar/Navbar';

export function Navbar({ className }: NavbarProps): JSX.Element | null {

  return (
    <nav data-component-name="Navbar/Navbar" className="overrideNavbar" >
      <Banner />
      <wc-mega-menu></wc-mega-menu>
      <Helmet>
        <script type='module' src='./static/assets/script/zuora-navigation.js' id='zuora-unav' crossOrigin='anonymous'></script>
      </Helmet>
    </nav>
  );
}
