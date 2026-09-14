import * as React from 'react';
import styled from 'styled-components';

import { BuildCards } from './styled/BuildCards';

import faqImg1 from './images/invoice.svg';
import faqImg2 from './images/hand-coins.svg';


export function Faq() {
  const faqCards = [
    {
      link: '/faq/billing-faq/',
      title: 'FAQ for Zuora Billing',
      description: 'Everything you need to know about Zuora Billing',
      img: faqImg1,
      imgBackgroundColor: `#00D2B9`,
    },
    {
      link: '/faq/payments-faq/',
      title: 'FAQ For Zuora Payments',
      description: 'Everything you need to know about Zuora Payments',
      img: faqImg2,
      imgBackgroundColor: `#0D4AC3`,
    }
  ];


  return (
    <Wrapper>
      <TopBackgroundImage src={require('./images/bg-1.svg')} />
      <SecondBackground src={require('./images/bg-2.svg')} />
      <ThirdBackground src={require('./images/bg-3.svg')} />
      <BottomBackground src={require('./images/bg-4.svg')} />
      <Sections>
        <Title>Developer FAQs</Title>
        <BuildCards cards={faqCards} sectionTitle="" />
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
  max-width: 872px;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const Title = styled.p`
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  color: rgb(0, 0, 0, 0.9);
`;

const Footer = styled.p`
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  max-width: 872px;
  width: 100%;
  margin-top: 40px; 
  justify-content: center;
`;

const TopBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const SecondBackground = styled.img`
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 1;
`;

const ThirdBackground = styled.img`
  position: absolute;
  top: 55%;
  left: 0;
  z-index: 1;
`;

const BottomBackground = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
