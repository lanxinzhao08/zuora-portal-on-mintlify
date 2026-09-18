import * as React from 'react';
import styled from 'styled-components';

// import { mediaCSS } from '@redocly/reference-docs';
import { Typography } from '@redocly/theme';

type OvrCard = {
  img: string;
  title: string;
  description: string;
  link: string;
};

type OvrCardsProps = {
  cards: OvrCard[];
};

export function OvrCards({ cards }: OvrCardsProps) {
  return (
    <Wrapper>
      {cards.map((card, index) => {
        return (
          <Card key={index} img={card.img} href={card.link}>
            <Typography color="#fff" fontSize="16px" fontWeight={700}>
              {card.title}
            </Typography>
            <Typography color="#fff" fontSize="14px">
              {card.description}
            </Typography>
          </Card>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 64px;

  /* ${mediaCSS({
    //gridTemplateColumns: { _: '1fr', medium: '1fr 1fr' },
  })} */
`;

const Card = styled.a<{ img: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${({ img }) => img});
  background-size: cover;
  padding: 20px 24px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  /* ${mediaCSS({
    //height: { _: '164px', medium: '192px' },
  })} */

  ${Typography} {
    margin: 0;
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  &:hover {
    opacity: 0.9;
  }
`;
