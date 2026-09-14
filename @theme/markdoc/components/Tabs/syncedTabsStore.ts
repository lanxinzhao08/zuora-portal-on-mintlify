import { useState, useEffect } from 'react';

/**
 * Shared store for syncing the active tab label across all Tabs components on the page.
 * When the user selects a tab (e.g. "Java") in any Tabs block, all other Tabs blocks
 * switch to the same tab label if they have that tab.
 */

type Listener = () => void;

let syncedTabLabel: string | null = null;
const listeners = new Set<Listener>();

export function getSyncedTabLabel(): string | null {
  return syncedTabLabel;
}

export function setSyncedTabLabel(label: string | null): void {
  if (syncedTabLabel === label) return;
  syncedTabLabel = label;
  listeners.forEach((listener) => listener());
}

export function subscribeSyncedTabLabel(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Hook that returns the current synced tab label and re-renders when it changes. */
export function useSyncedTabLabel(): string | null {
  const [label, setLabel] = useState<string | null>(() => getSyncedTabLabel());

  useEffect(() => {
    setLabel(getSyncedTabLabel());
    return subscribeSyncedTabLabel(() => setLabel(getSyncedTabLabel()));
  }, []);

  return label;
}
