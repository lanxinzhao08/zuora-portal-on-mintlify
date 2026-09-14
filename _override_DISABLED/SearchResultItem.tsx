// import * as React from 'react';
// import styled from 'styled-components';
// import reactStringReplace from 'react-string-replace';
// import {
//   SearchResultItemWrap,
//   SearchResultLink,
//   SearchItemDescription,
//   OperationBadge,
// } from '@redocly/developer-portal/ui';

// interface SearchResult {
//   label: string;
//   link: string;
//   content?: string;
//   score: number;
//   httpVerb?: string;
//   apiName?: string;
//   meta: {
//     place: string;
//     path: string[];
//     boost?: number;
//   }[];
// }

// export interface SearchResultItemProps {
//   item: SearchResult;
//   query: string;
//   active: boolean;
//   onSearchResultsItemClick?: () => void;
// }

// export default class SearchResultItem extends React.Component<SearchResultItemProps> {
//   ref: Element | null;

//   componentDidMount() {
//     this.scrollIntoViewIfActive();
//   }

//   componentDidUpdate() {
//     this.scrollIntoViewIfActive();
//   }

//   scrollIntoViewIfActive() {
//     if (this.props.active && this.ref) {
//       this.ref.scrollIntoView({ block: 'end', behavior: 'smooth' });
//     }
//   }

//   handleSearchResultLinkClick = () => {
//     this.props.onSearchResultsItemClick?.();
//   };

//   render() {
//     const { query, item } = this.props;
//     const { link, label, httpVerb, apiName } = item;
//     const description = this.getSearchItemDescription(item);

//     const title =
//       apiName && apiName !== label ? apiName + ' - ' + label : label;

//     const highlightedDescription =
//       typeof description === 'string'
//         ? this.getSearchResultText(description, query)
//         : description;
//     return (
//       <SearchResultLink to={link} onClick={this.handleSearchResultLinkClick}>
//         <SearchResultItemWrap
//           active={this.props.active}
//           ref={(ref) => (this.ref = ref)}
//           data-cy={label}>
//           {httpVerb && (
//             <OperationBadge type={httpVerb}>
//               {normalizeRedocBadge(httpVerb)}
//             </OperationBadge>
//           )}
//           {this.getSearchResultText(title, query)}
//           {highlightedDescription && (
//             <SearchItemDescription data-cy={`search-result-description`}>
//               {highlightedDescription}
//             </SearchItemDescription>
//           )}
//         </SearchResultItemWrap>
//       </SearchResultLink>
//     );
//   }

//   getSearchResultText(text: string, match: string, symbolsToShow = 200) {
//     const _text = text.toLowerCase();
//     const _match = match.toLowerCase();

//     const matchPosition = _text.indexOf(_match);
//     const matchLength = _match.length;

//     const surroundTextLength = symbolsToShow - matchLength;

//     const start = matchPosition - surroundTextLength / 2;
//     const end = matchPosition + surroundTextLength / 2;

//     return reactStringReplace(
//       this.getSurroundText(start, end, text, matchLength),
//       match,
//       (matchText, i) => (
//         <SearchHighlightedText key={i} data-cy={`search-result-title`}>
//           {matchText}
//         </SearchHighlightedText>
//       )
//     );
//   }

//   getSurroundText(
//     start: number,
//     end: number,
//     text: string,
//     matchLength: number
//   ) {
//     if (start > 0 && end < text.length) {
//       return '...' + text.slice(start, end) + '...';
//     }
//     if (start < 0 && end < text.length) {
//       const offsetEnd = end - start + matchLength;
//       return offsetEnd < text.length
//         ? text.slice(0, offsetEnd) + '...'
//         : text.slice(0, offsetEnd);
//     }
//     if (start > 0 && end > text.length) {
//       const offsetStart = start - (end - text.length);
//       return offsetStart < 0
//         ? text.slice(0, text.length)
//         : '...' + text.slice(offsetStart, text.length);
//     }

//     return text;
//   }

//   getSearchItemDescription(item: SearchResult) {
//     const query = this.props.query;

//     if (item.meta && item.meta.length === 1) {
//       return item.meta[0].place
//         ? `${item.meta[0].place} ${formatPath(query, item.meta[0].path)}`
//         : lastContentLine(item.content);
//     } else if (item.meta && item.meta.length > 1) {
//       const places = {};
//       for (let meta of item.meta) {
//         if (meta.place) {
//           places[meta.place] = true;
//         }
//       }

//       const placesNames = Object.keys(places);
//       return placesNames.length ? (
//         <>
//           {item.meta.length} matching{' '}
//           <strong>{formatPlaces(placesNames)}</strong>
//         </>
//       ) : (
//         lastContentLine(item.content)
//       );
//     } else {
//       return item.content;
//     }
//   }
// }

// function lastContentLine(content: string | undefined = ''): string {
//   return content.split('\n').pop() || '';
// }

// function formatPlaces(places: string[]) {
//   if (places.length === 1) {
//     return places[0];
//   }
//   places.sort();
//   return (
//     places.slice(0, places.length - 1).join(', ') +
//     ' and ' +
//     places[places.length - 1]
//   );
// }

// function formatPath(term: string, path?: string[]) {
//   if (!path || path.length === 0) {
//     return '';
//   }

//   return ' → ' + path.join(' → ');
// }

// const SearchHighlightedText = styled.span`
//   color: ${(props) => props.theme.colors.primary.main};
//   font-weight: bold;
// `;

// function normalizeRedocBadge(label: string) {
//   return label === 'hook' ? 'event' : label;
// }
