import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { SearchTrigger } from '@redocly/theme/components/Search/SearchTrigger';
import { SearchDialog } from '@redocly/theme/components/Search/SearchDialog';
import { useSearchDialog } from '@redocly/theme/core/hooks';
import { SearchSessionProvider } from '@redocly/theme/core/contexts';
import { createPortal } from 'react-dom';

export type SearchProps = {
  className?: string;
};

function SearchContent({ className }: SearchProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useSearchDialog();

  return (
    <SearchWrapper data-component-name="Search/Search" className={className}>
      <SearchTrigger onClick={onOpen} />
      {/* {isOpen && <SearchDialog onClose={onClose} />} */}
      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <SearchDialog onClose={onClose} />,
          document.body
        )}
    </SearchWrapper>
  );
}

export function Search({ className }: SearchProps): JSX.Element {
  return (
    <SearchSessionProvider>
      <SearchContent className={className} />
    </SearchSessionProvider>
  );
}

const SearchWrapper = styled.div`
  margin-left: auto;
`;
