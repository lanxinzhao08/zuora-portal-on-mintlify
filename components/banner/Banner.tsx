import * as React from 'react';
import styled from 'styled-components';

// import { mediaCSS } from '@redocly/reference-docs';

export function Banner() {
  return (
    <Wrapper>
      <Sections>
      <div> 
        <img src={require('./images/lightbulb.svg')}/> <FirstLine><span>Catch up on Zuora's Partner Hackathon: <a href="/blogs/2025-8-19-zuorapartnerhackathon/" target="_blank">Unleashing developer innovation at Zuora's Partner Hackathon
        </a></span></FirstLine>
      </div>
      </Sections>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  position: relative;
  z-index: 8;

  background-color: #ddffe1; 
  color: #000; 
  padding: 20px 18px 16px 18px !important;
  border-radius: 8px;
  line-height: 1.4;
  vertical-align: top;


  /* ${mediaCSS({
    ///padding: { _: '42px 24px 40px', medium: '40px 56px' },
  })} */
`;

const FirstLine = styled.span`
  vertical-align: top;
`;

