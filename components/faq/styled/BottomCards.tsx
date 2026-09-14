import * as React from 'react';
import styled from 'styled-components';

// import { mediaCSS } from '@redocly/reference-docs';
import { Typography } from '@redocly/theme';

type BottomCard = {
  title: string;
  description: string;
  img: string;
  link: string;
  linkText: string;
};

type BottomCardsProps = {
  cards: BottomCard[];
};

export function BottomCards({ cards }: BottomCardsProps) {
  return (
    <Wrapper>
      {cards.map((card, index) => {
        return (
          <Card key={index}>
            <div>
              <Image src={card.img} />
              <Typography
                color="rgb(0, 0, 0, 0.9)"
                fontSize="16px"
                fontWeight={700}
                lineHeight="20px">
                {card.title}
              </Typography>
              <Typography color="#353740" fontSize="14px">
                {card.description}
              </Typography>
            </div>
            <Row>
              <LinkItem href={card.link}>{card.linkText}</LinkItem>
              <img src={require('../images/arrow.svg')} />
            </Row>
          </Card>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  /* ${mediaCSS({
    //gridTemplateColumns: { _: '1fr', small: '1fr 1fr', medium: '1fr 1fr 1fr' },
    //gap: { _: '24px', small: '48px', medium: '72px' },
    //paddingTop: { _: '16px', small: '24px', medium: '36px' },
  })} */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #00d2b9;
  padding-left: 24px;

  div {
    display: flex;
    flex-direction: column;
  }
  ${Typography} {
    margin: 0 0 8px 0;
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 32px;
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0, 0.9);
  transition: color 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 700;
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 8px;
  gap: 8px;
  align-items: center;

  img {
    height: 12px;
    width: 14.4px;
  }
`;
