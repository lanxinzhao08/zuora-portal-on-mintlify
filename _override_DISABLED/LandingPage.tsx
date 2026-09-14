// import * as React from 'react';
// import Helmet from 'react-helmet';
// import { SearchBox, usePageData } from '@redocly/developer-portal/ui';
// import { theme } from '../theme';
// import styled from 'styled-components';

// export default function LandingPage(props) {
//   const { pageId } = usePageData();
//   const { disableSearch } = props;
//   const notFoundPage = pageId === undefined;

//   const PageBody = styled.div`
//   <h1><span>Welcome to the&nbsp;<br class="mobile-break">Zuora developer platform</span></h1>
//   `;

//   return (
//     <div class="page-body ovr-page">
//       <PageBody>
//       </PageBody>
//       <Helmet>
//         <script type='module' src='https://nav-assets.zuora.life/script/zuora-navigation-dev.js' id='zuora-unav' crossorigin='anonymous'></script>
//       </Helmet>
//     </div>
//   )
// }