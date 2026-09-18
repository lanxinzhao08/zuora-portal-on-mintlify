import React, { useEffect } from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { MenuItemsAnimation } from '@redocly/theme/core/types';

import { breakpoints } from '@redocly/theme/core/utils';
import { useThemeConfig, useMobileMenu } from '@redocly/theme/core/hooks';
import { MenuContainer } from '@redocly/theme/components/Menu/MenuContainer';
import { Search } from '@redocly/theme/components/Search/Search';

export type SidebarProps = {
  versions?: React.ReactNode;
  menu?: React.ReactNode;
  backLink?: {
    label: string;
    slug: string;
  };
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  header?: React.ReactNode;
  growContent?: boolean;
  collapsed?: boolean;
  onToggleMenu?: (isOpen: boolean) => void;
  className?: string;
  menuItemsAnimation?: MenuItemsAnimation;
};

export function Sidebar({
  versions,
  menu,
  footer,
  header,
  growContent,
  collapsed,
  className,
  menuItemsAnimation,
}: SidebarProps): JSX.Element | null {
  const { isOpen } = useMobileMenu();
  const [mappedCollapsed, setMappedCollapsed] = React.useState(collapsed);

  useEffect(() => {
    setMappedCollapsed(collapsed && !isOpen);
  }, [isOpen, collapsed, setMappedCollapsed]);

  const { sidebar } = useThemeConfig();

  if (sidebar?.hide) {
    return null;
  }

  return (
    <SidebarContent
      data-component-name="Sidebar/Sidebar"
      opened={isOpen}
      className={className}
      collapsed={mappedCollapsed}
    >
      {header ? <SidebarHeader collapsed={mappedCollapsed}>{header}</SidebarHeader> : null}
      {!mappedCollapsed && versions ? versions : null}
      {!mappedCollapsed && <Search />}
      <MenuContainer
        hidden={mappedCollapsed}
        growContent={growContent}
        animation={menuItemsAnimation}
      >
        {menu}
      </MenuContainer>
      {footer && !isOpen ? (
        <SidebarFooter collapsed={mappedCollapsed} data-component-name="Sidebar/FooterWrapper">
          {footer}
        </SidebarFooter>
      ) : null}
    </SidebarContent>
  );
}

const SidebarContent = styled.aside<{ opened?: boolean; collapsed?: boolean }>`
  border-right: 1px solid var(--sidebar-border-color);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: var(--sidebar-bg-color);
  font-size: var(--sidebar-font-size);
  font-family: var(--sidebar-font-family);
  color: var(--sidebar-text-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  overflow-x: hidden;
  ${({ opened }) => `
    display: ${opened ? 'flex' : 'none'}
  `};

  @media screen and (min-width: ${breakpoints.medium}) {
    position: sticky;
    pointer-events: auto;
    display: flex;
    opacity: 1;
    flex-shrink: 0;
    overflow: clip;

    ${({ collapsed }) =>
      collapsed
        ? `
          flex-direction: column;
          width: var(--sidebar-collapsed-width);
    `
        : 'width: var(--sidebar-width);'}

    & > * {
      transform: none;
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    transform: none;
  }
`;

export const SidebarHeader = styled.div<{ collapsed?: boolean }>`
  margin: var(--sidebar-offset-top) var(--sidebar-margin-horizontal) 0
    var(--sidebar-margin-horizontal);
  padding: 0 0 var(--sidebar-header-padding-bottom) 0;

  ${({ collapsed }) =>
    !collapsed &&
    `
      border-bottom: solid 1px var(--border-color-secondary);
    `}
`;

const SidebarFooter = styled.div<{ collapsed?: boolean }>`
  display: none;
  padding: var(--sidebar-footer-padding-vertical) var(--sidebar-footer-padding-horizontal);

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'flex-end')};
  }

  ${({ collapsed }) =>
    collapsed &&
    `
        position: sticky;
        bottom: 0;
        padding: 0;
        margin-top: auto;
    `}

  button {
    margin: 0;
  }
`;
