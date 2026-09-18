// import * as React from 'react';
// import styled from 'styled-components';
// import useOnClickOutside from 'use-onclickoutside';
// import '../components/search.styles.css';

// import {
//   SearchResultsWrap,
//   SearchResultsProps,
// } from '@redocly/developer-portal/ui';

// import SearchResultItem from './SearchResultItem';

// const MAX_ITEMS_PER_GROUP_API = 8;
// const MAX_ITEMS_PER_GROUP_REST_API = 30;

// const MAX_ITEMS_PER_GROUP_DOC = 10;

// const MAX_ITEMS_OLDER_API = 8;

// /**
//  * Custom User Search results. The implementation below is similar to our default search results but
//  * implements simple grouping by URL
//  */

// export default function CustomSearchResults(props: SearchResultsProps) {
//   const {
//     show,
//     results,
//     indexError,
//     activeItemIdx,
//     loading,
//     query,
//     onSearchResultsItemClick,
//     onToggleSearchResults,
//   } = props;

//   const ref = React.useRef(null);

//   useOnClickOutside(ref, () => onToggleSearchResults(false));
//   /** 
//   function isApiResult(item) {
//     return !!item.httpVerb && item.link.startsWith('/api-references'); 
//   }

//   const otherResults = {
//     title: 'Developer Docs',
//     results: results.filter(item => !isApiResult(item)).slice(0, MAX_ITEMS_PER_GROUP_DOC),
//   };
//   */

//   let currentPathname =
//     typeof location !== 'undefined' ? location.pathname : '/';

//   function isApiResult(item) {
//     return !item.httpVerb;
//   }

//   function isV2ApiResult(item) {
//     return (
//       !!item.httpVerb &&
//       item.link.startsWith('/other-api/quickstart-api/')
//     );
//   }

//   function isRestApiResult(item) {
//     return !!item.httpVerb && item.link.startsWith('/v1-api-reference/api/');
//   }

//   function isOlderApiResult(item) {
//     return !!item.httpVerb && item.link.startsWith('/v1-api-reference/older-api/');
//   }

//   function isZephrApiResult(item) {
//     return !!item.httpVerb && item.link.startsWith('/zephr-api-reference');
//   }

//   function isOtherApiResult(item) {
//     // return !!item.httpVerb && (item.link.startsWith('/api-references/older-api') || !!item.link.startsWith('/api-references/revenue') || !!item.link.startsWith('/api-references/collections'));
//     return !!item.httpVerb && item.link.startsWith('/other-api/revenue');
//   }

//   const qsApiResults = {
//     title: 'Quickstart API',
//     results: results.filter(isV2ApiResult).slice(0, MAX_ITEMS_PER_GROUP_API),
//   };

//   const restApiResults = {
//     title: 'v1 API',
//     results: results
//       .filter(isRestApiResult)
//       .slice(0, MAX_ITEMS_PER_GROUP_REST_API),
//   };

//   const olderApiResults = {
//     title: 'Legacy API',
//     results: results
//       .filter(isOlderApiResult)
//       .slice(0, MAX_ITEMS_OLDER_API),
//   };

//   const zephrApiResults = {
//     title: 'Zephr API',
//     results: results.filter(isZephrApiResult).slice(0, MAX_ITEMS_PER_GROUP_API),
//   };

//   const otherApiResults = {
//     title: 'Other API',
//     results: results.filter(isOtherApiResult).slice(0, MAX_ITEMS_PER_GROUP_API),
//   };

//   const docResults = {
//     title: 'Docs',
//     results: results.filter(isApiResult).slice(0, MAX_ITEMS_PER_GROUP_DOC),
//   };

//   /** 
//   const otherResults = {
//     title: 'Developer Docs',
//     results: results.filter(item => !isV2ApiResult(item)&&!isRestApiResult(item)&&!isZephrApiResult(item)&&!isOtherApiResult(item)).slice(0, MAX_ITEMS_PER_GROUP_DOC),
//   };
//   */

//   // order results differently based on current page
//   // const searchGroups =
//   //   currentPathname && currentPathname.startsWith('/api-references') ? [otherResults, apiResults] : [apiResults, otherResults];
//   //const searchGroups =
//   //   currentPathname && currentPathname.startsWith('/api-references') ? [apiResults, otherResults]: [otherResults, apiResults];

//   const searchGroups =
//     currentPathname && currentPathname.startsWith('/docs')
//       ? [
//           restApiResults,
//           olderApiResults,
//           qsApiResults,
//           zephrApiResults,
//           otherApiResults,
//           docResults,
//         ]
//       : [
//           docResults,
//           restApiResults,
//           olderApiResults,
//           qsApiResults,
//           zephrApiResults,
//           otherApiResults,
//         ];


//   return (
//     <SearchResultsWrap show={show} ref={ref} className="search-results">
//       {indexError && process.env.NODE_ENV === 'development' && (
//         <Message>
//           Failed to load search index. Search index is not working in develop.{' '}
//           <br />
//           Run <code>yarn build</code> to build the search index first (requires
//           license key).
//         </Message>
//       )}
//       {results.length === 0 && !loading && (
//         <MessageNothing> No results found </MessageNothing>
//       )}

//       {/* our default implementation iterates over the results directly */}
//       {/*
//       {results.map((item, idx) => (
//         <SearchResultItem
//           key={item.link}
//           item={item}
//           query={query}
//           active={idx === activeItemIdx}
//         />
//       ))}
//       */}

//       {searchGroups.map((group, index) => {
//         return group.results.length ? (
//           <React.Fragment key={group.title}>
//             <SearchCatTitle> {group.title} </SearchCatTitle>
//             {group.results.map((item, idx) => (
//               <div key={item.link}>
//                 <SearchResultItem
//                   key={item.link}
//                   item={item}
//                   query={query}
//                   active={
//                     countIndex(index, idx, searchGroups) === activeItemIdx
//                   }
//                   onSearchResultsItemClick={onSearchResultsItemClick}
//                 />
//               </div>
//             ))}
//           </React.Fragment>
//         ) : null;
//       })}
//     </SearchResultsWrap>
//   );
// }

// // to support keyboard navigation
// const countIndex = (index, idx, searchGroups) => {
//   if (index === 0) {
//     return idx;
//   } else if (index === 1) {
//     return searchGroups[0].results.length + idx;
//   }
// };

// const Message = styled.div`
//   text-align: center;
//   color: ${(props) => props.theme.colors.primary.main};
//   padding: 1.5em;
//   @media only screen and (max-width: ${({ theme }) =>
//       theme.breakpoints.medium}) {
//     padding: 0.75em;
//   }
//   color: #212129;
// `;

// const SearchCatTitle = styled.div`
//   color: #919194;
//   padding: 16px;
//   text-transform: uppercase;
//   font-size: 14px;
// `;

// const MessageNothing = styled.p`
//   display: flex;
//   position: relative;
//   text-align: left;
//   text-size-adjust: 100%;
//   -webkit-font-smoothing: antialiased;
//   font-family: Source Sans Pro, sans-serif;
//   font-size: 14px;
//   line-height: 1.5em;
//   font-weight: 400;
//   color: rgb(31, 41, 51);
//   padding: 30px 20px;
//   background-color: rgba(255, 255, 255);
//   border-radius: 0 0 8px 8px;
//   height: fit-content;
//   margin: 0;
// `;
