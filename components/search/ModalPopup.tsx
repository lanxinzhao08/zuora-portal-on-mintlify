// import * as React from 'react';
// import styled from 'styled-components';

// import { Search} from '@redocly/theme/components/Search/Search';

// export const ModalPopup = ({ location, setIsOpenSearch, isOpen }) => {
//   React.useEffect(() => {
//     if (isOpen) {
//       const timer = setTimeout(() => {
//         const inputElement =
//           document.querySelector<HTMLInputElement>('#search');
//         if (inputElement) {
//           inputElement.focus();
//         }
//       }, 0);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   return (
//     <Wrapper>
//       <Container>
//         <SearchIcon src={require('./images/search-icon.svg')} />
//         <Search
          
//         />
//         <CloseIcon
//           src={require('./images/clean-icon.svg')}
//           onClick={() => setIsOpenSearch(false)}
//         />
//       </Container>
//       <Message> No results found </Message>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 600px;
//   height: 620px;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   overflow: scroll;
// `;

// const Container = styled.div`
//   display: flex;
//   background-color: rgb(245, 247, 250);
//   height: 45px;
//   position: relative;
//   align-items: center;
//   width: 100%;

//   input {
//     fontfamily: -apple-system, 'system-ui', 'Segoe UI', Roboto, Helvetica, Arial,
//       sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
//     background-color: transparent !important;

//     &::placeholder {
//       color: ${theme.sidebar.placeholderColor};
//     }
//   }

//   #search {
//     width: 100% !important;
//     margin: 0 32px;
//     min-width: 430px;
//   }

//   span span span {
//     visibility: hidden;
//   }

//   .searchBox {
//     width: 100%;
//   }
// `;

// const Message = styled.p`
//   display: flex;
//   position: relative;
//   text-align: left;
//   text-size-adjust: 100%;
//   -webkit-font-smoothing: antialiased;
//   font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
//   font-size: 14px;
//   line-height: 1.2em;
//   font-weight: 400;
//   color: rgb(31, 41, 51);
//   padding: 30px 20px;
//   background-color: rgba(255, 255, 255);
//   border-radius: 0 0 8px 8px;
//   height: fit-content;
//   margin: 0;
// `;

// const SearchIcon = styled.img`
//   position: absolute;
//   left: 15px;
// `;

// const CloseIcon = styled.img`
//   position: absolute;
//   right: 15px;
//   cursor: pointer;
// `;
