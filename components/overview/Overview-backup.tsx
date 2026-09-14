import * as React from 'react';
import styled from 'styled-components';

import { mediaCSS } from '@redocly/reference-docs';

import { BuildCards } from './styled/BuildCards';
import { StartCards } from './styled/StartCards';
import { BottomCards } from './styled/BottomCards';

import bottomCard1 from './images/chat-dots.svg';
import bottomCard2 from './images/chats.svg';
import bottomCard3 from './images/notebook.svg';

import exploreImg1 from './images/sparkle.svg';
import exploreImg2 from './images/shopping-bag.svg';
import exploreImg3 from './images/cardholder.svg';
import exploreImg4 from './images/invoice.svg';
import exploreImg5 from './images/chat-text.svg';
import exploreImg6 from './images/crosshair.svg';
import exploreImg7 from './images/signpost.svg';
import { HomepageBanner } from '../banner/HomepageBanner';
import { HomepageBannerCarousel } from '../banner/HomepageBannerCarousel';

export function Overview() {
  const startCards = [
    {
      link: '/docs/get-started/introduction/',
      title: 'Get started',
      description: 'Make your first API request',
      img: exploreImg1,
      imgBackgroundColor: `#00D2B9`,
    },
    {
      link: '/docs/get-started/api-tutorials/orders-tutorials/order-basics/',
      title: 'New Orders tutorials',
      description: 'Control account creation, subscription lifecycles, and revenue recognition with one API call',
      img: exploreImg7,
      imgBackgroundColor: `#b0ceef`,
    },
  ];  


  const exploreCards = [
    {
      link: '/docs/get-started/tutorials/subscriptions/',
      title: 'Sign up customers',
      description: 'Learn best practices for signing up customers',
      img: exploreImg2,
      imgBackgroundColor: `#0D4AC3`,
    },
    {
      link: '/docs/get-started/tutorials/payment-form/',
      title: 'Collect payments with payment form',
      description:
        'Learn how to set up a hosted payment form to collect payments securely',
      img: exploreImg3,
      imgBackgroundColor: `#F6C7E9`,
    },
    {
      link: '/docs/get-started/tutorials/billing-documents/',
      title: 'Create billing documents',
      description: 'Learn how to create and post invoices and credit/debit memos',
      img: exploreImg4,
      imgBackgroundColor: `#916FEF`,
    },
//    {
//      link: '/',
//      title: 'Update prices on subscriptions',
//      description:
//        'Learn how to update subscription prices by creating an order',
//      img: exploreImg5,
//      imgBackgroundColor: `#FF4635`,
//    },
    {
      link: '/docs/guides/expand-filter-fields-sort/',
      title: 'Expand, filter, fields, and sort',
      description: 'Learn how to query objects',
      img: exploreImg6,
      imgBackgroundColor: `#E0B642`,
    },
  ];

  const faqCards = [
    {
      link: '/faq/developer-faqs/',
      title: 'Developer FAQs',
      description: 'FAQs to help developers ramp up with Zuora',
      img: exploreImg5,
      imgBackgroundColor: `#ebd5ba`,
    },
  ];

  const bottomCards = [
    {
      link: '/blogs/introduction/',
      title: 'Developer Blog',
      description: 'Follow the Developer Blog to learn about new developer experience product features',
      linkText: 'Visit the Developer Blog',
      img: bottomCard1,
    },
    {
      link: 'https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3',
      title: 'Developer Forum',
      description: 'Ask questions and discuss topics with developers in the Community',
      linkText: 'Visit forum',
      img: bottomCard2,
    },
    {
      link: 'https://docs.zuora.com',
      title: 'Product Docs',
      description: 'Browse our extensive library of product documentation in the Knowledge Center',
      linkText: 'Find docs',
      img: bottomCard3,
    },
  ];

  return (
    <Wrapper>
      <TopBackgroundImage src={require('./images/bg-1.svg')} />
      <SecondBackground src={require('./images/bg-2.svg')} />
      <ThirdBackground src={require('./images/bg-3.svg')} />
      <BottomBackground src={require('./images/bg-4.svg')} />
      <Sections>
        <Title>Welcome, Zuora Developers</Title>
        <HomepageBanner />
        <StartCards cards={startCards} sectionTitle="Get Started" />
        <BuildCards cards={exploreCards} sectionTitle="Explore the API" />
        <BuildCards cards={faqCards} sectionTitle="FAQs" />
        <BottomCards cards={bottomCards} />
        <Footer><span>Still need help?&nbsp;</span><a href="https://support.zuora.com">Contact Zuora Support.</a></Footer>
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

  ${mediaCSS({
    padding: { _: '42px 24px 40px', medium: '40px 56px' },
  })}
`;

const Title = styled.p`
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  color: rgb(0, 0, 0, 0.9);
  margin-bottom: 28px !important;
  ${mediaCSS({
    marginBottom: { _: '48px', medium: '48px' },
  })}
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
