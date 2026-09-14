import * as React from 'react';
import styled from 'styled-components';

import { OvrCards } from './OvrCards';

import { Typography } from '@redocly/theme';
// import {Box} from '@redocly/theme';

import gradientCard1 from '../images/gradient_card_1.webp';
import gradientCard2 from '../images/gradient_card_2.webp';

export function OvrSection() {
  const ovrCards = [
    {
      title: 'Quickstart API tutorial',
      description: 'Make your first Quickstart API request',
      link: './docs/get-started/introduction/',
      img: gradientCard1,
    },
    /*{
      title: 'Prompt examples',
      description: 'Explore what OpenAI models can do with prompts',
      link: '/',
      img: gradientCard2,
    },*/
  ];
  return (
    <Wrapper width="100%">
      <Typography fontSize="32px" color="#202123" fontWeight={700} m="0 0 40px">
        Welcome to the Zuora developer platform
      </Typography>
      <Typography fontSize="24px" color="#202123" fontWeight={700} m="0 0 24px">
        Start with the basics
      </Typography>
      <OvrCards cards={ovrCards} />
    </Wrapper>
  );
}

const Wrapper = styled.div`   // CHECKTHIS
  ${Typography} {
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;
