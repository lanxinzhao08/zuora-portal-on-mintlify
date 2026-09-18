import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useInRouterContext } from 'react-router-dom';
import styled, { css } from 'styled-components';

import type { JSX } from 'react';

import { useActiveTab } from '@redocly/theme/core/hooks';
import { TabList } from '@redocly/theme/markdoc/components/Tabs/TabList';
import { getTabId } from '@redocly/theme/core/utils';
import { useSyncedTabLabel, setSyncedTabLabel } from './syncedTabsStore';

export enum TabsSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export type TabItemProps = {
  label: string;
  disable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode | string;
};

type TabsProps = {
  id?: string;
  children: React.ReactElement<TabItemProps>[];
  className?: string;
  size: TabsSize;
  initialTab?: string;
  forceReady?: boolean;
  activeTab?: string;
};

type UseActiveTabFn = (
  initialTab: string,
  tabsId: string | undefined,
  childrenArray: React.ReactElement<TabItemProps>[],
) => {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

type TabsViewProps = Omit<TabsProps, 'children'> & {
  childrenArray: React.ReactElement<TabItemProps>[];
  initialTab: string;
  isReady: boolean;
  labelsHash: string;
  useActiveTab: UseActiveTabFn;
  containerRef: React.RefObject<HTMLUListElement | null>;
  onReadyChange: (ready: boolean) => void;
  externalActiveTab?: string;
};

export function Tabs({
  id,
  children,
  className,
  size,
  initialTab: propInitialTab,
  forceReady = false,
  activeTab: controlledActiveTab,
}: TabsProps): JSX.Element {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<TabItemProps>[];
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLUListElement | null>(null);

  const initialTab = propInitialTab ?? childrenArray[0]?.props.label ?? '';
  const labelsHash = childrenArray.map((c) => c.props.label).join('|');

  const handleReadyChange = useCallback((ready: boolean) => {
    setIsReady(ready);
  }, []);

  // Reset isReady when children change (new page/tabs)
  // Use useLayoutEffect to run synchronously before paint
  useLayoutEffect(() => {
    setIsReady(false);
  }, [labelsHash]);

  const inRouter = useInRouterContext();

  return (
    <TabsView
      id={id}
      className={className}
      size={size}
      childrenArray={childrenArray}
      initialTab={initialTab}
      useActiveTab={inRouter ? useActiveTabWithRouter : useActiveTabWithoutRouter}
      isReady={isReady || forceReady}
      labelsHash={labelsHash}
      containerRef={containerRef}
      onReadyChange={handleReadyChange}
      externalActiveTab={controlledActiveTab}
    />
  );
}

function TabsView({
  id,
  className,
  size,
  childrenArray,
  useActiveTab,
  initialTab,
  isReady,
  labelsHash,
  containerRef,
  onReadyChange,
  externalActiveTab,
}: TabsViewProps): JSX.Element {
  const { activeTab, setActiveTab } = useActiveTab(initialTab, id, childrenArray);
  const syncedTabLabel = useSyncedTabLabel();

  const availableLabels = childrenArray.map((c) => c.props.label);
  const syncedLabelInOurTabs = syncedTabLabel != null && availableLabels.includes(syncedTabLabel);

  // Sync from other Tabs: when user selected a tab elsewhere, switch this block to the same tab
  useEffect(() => {
    if (syncedLabelInOurTabs && syncedTabLabel && syncedTabLabel !== activeTab) {
      setActiveTab(syncedTabLabel);
    }
  }, [syncedLabelInOurTabs, syncedTabLabel, activeTab, setActiveTab]);

  // Controlled active tab from parent
  useEffect(() => {
    if (externalActiveTab && externalActiveTab !== activeTab) {
      setActiveTab(externalActiveTab);
    }
  }, [externalActiveTab, activeTab, setActiveTab]);

  const handleTabChange = useCallback(
    (labelOrIndex: string | number) => {
      const label =
        typeof labelOrIndex === 'number'
          ? childrenArray[labelOrIndex]?.props.label ?? initialTab
          : labelOrIndex;
      setActiveTab(label);
      setSyncedTabLabel(label);
    },
    [setActiveTab, childrenArray, initialTab],
  );

  return (
    <TabsContainer
      data-component-name="Markdoc/Tabs/Tabs"
      className={className}
      key={id}
      $isReady={isReady}
    >
      <TabList
        key={labelsHash}
        size={size}
        childrenArray={childrenArray}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        containerRef={containerRef}
        onReadyChange={onReadyChange}
      />
      {childrenArray.map((child, index) => {
        const { label } = child.props;
        const tabId = getTabId(label, index);
        return label === activeTab ? (
          <TabContent
            key={`content-${tabId}`}
            id={`panel-${tabId}`}
            aria-labelledby={`tab-${tabId}`}
            tabIndex={0}
            role="tabpanel"
          >
            {child.props.children}
          </TabContent>
        ) : null;
      })}
    </TabsContainer>
  );
}

/**
 * Validates that the active tab exists in children and resets to initial tab if not found.
 * Ensures tab state remains consistent when tab structure changes.
 */
function useValidateActiveTab(
  activeTab: string,
  setActiveTab: (tab: string) => void,
  childrenArray: React.ReactElement<TabItemProps>[],
  initialTab: string,
) {
  useEffect(() => {
    const availableLabels = childrenArray.map((child) => child.props.label);
    if (activeTab && !availableLabels.includes(activeTab) && availableLabels.length > 0) {
      setActiveTab(initialTab);
    }
  }, [childrenArray, activeTab, initialTab, setActiveTab]);
}

const useActiveTabWithRouter = (
  initialTab: string,
  tabsId: string | undefined,
  childrenArray: React.ReactElement<TabItemProps>[],
) => {
  const { activeTab, setActiveTab } = useActiveTab({ initialTab, tabsId });

  useValidateActiveTab(activeTab, setActiveTab, childrenArray, initialTab);

  return {
    activeTab,
    setActiveTab,
  };
};

const useActiveTabWithoutRouter = (
  initialTab: string,
  _tabsId: string | undefined,
  childrenArray: React.ReactElement<TabItemProps>[],
) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useValidateActiveTab(activeTab, setActiveTab, childrenArray, initialTab);

  return {
    activeTab,
    setActiveTab,
  };
};

const TabsContainer = styled.div<{ $isReady: boolean }>`
  position: relative;
  color: var(--md-tabs-container-text-color);
  font-size: var(--md-tabs-container-font-size);
  font-family: var(--md-tabs-container-font-family);
  font-style: var(--md-tabs-container-font-style);
  font-weight: var(--md-tabs-container-font-weight);
  background-color: var(--md-tabs-container-bg-color);
  margin: var(--md-tabs-container-margin);
  padding: var(--md-tabs-container-padding);
  border: var(--md-tabs-container-border);

  ol[class^='Tabs__TabList'] {
    margin: 0;
    padding: 0;
  }

  ${({ $isReady }) =>
    !$isReady &&
    css`
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    `}
`;

export const TabContent = styled.div`
  color: var(--md-tabs-content-text-color);
  font-size: var(--md-tabs-content-font-size);
  font-family: var(--md-tabs-content-font-family);
  font-style: var(--md-tabs-content-font-style);
  font-weight: var(--md-tabs-content-font-weight);
  background-color: var(--md-tabs-content-bg-color);
  margin: var(--md-tabs-content-margin);
  padding: var(--md-tabs-content-padding);
  border: var(--md-tabs-content-border);

  &:focus-visible {
    outline: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -2px;
      right: -4px;
      bottom: -2px;
      left: -4px;
      border: 1px solid var(--button-border-color-focused);
      border-radius: 6px;
      pointer-events: none;
    }
  }
`;
