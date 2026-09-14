import * as React from 'react';
import styled from 'styled-components';

import { Typography, H2 } from '@redocly/theme';

type BuildCard = {
  title: string;
  description: string;
  img: string;
  link: string;
  imgBackgroundColor: string;
  betaLabel?: boolean;
};

type BuildCardsProps = {
  cards: BuildCard[];
  sectionTitle: string;
};

export function BuildCards({ cards, sectionTitle }: BuildCardsProps) {
  return (
    <Wrapper>
      <H2 color="#000" fontSize="24px">
        {sectionTitle}
      </H2>
      <CardsSection>
        {cards.map((card, index) => {
          return (
            <Card key={index} href={card.link}>
              <ImageContainer background={card.imgBackgroundColor}>
                <Image src={card.img} />
              </ImageContainer>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TitleWrapper>
                  <Typography
                    color="#000"
                    fontSize="16px"
                    fontWeight={700}
                    lineHeight="20px">
                    {card.title}
                  </Typography>
                </TitleWrapper>
                <Typography
                  color="rgb(0, 0, 0, 0.6)"
                  fontSize="14px"
                  fontWeight={400}
                  lineHeight="18px">
                  {card.description}
                </Typography>
                <Row>
                  <Typography
                    fontSize="14px"
                    fontWeight={700}
                    lineHeight="18px"
                    color="rgb(0, 0, 0, 0.9)">
                    Read
                  </Typography>
                  <img src={require('../images/arrow-right.svg')} />
                </Row>
              </div>
            </Card>
          );
        })}
      </CardsSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 48px;
  ${H2} {
    margin: 0 0 24px;
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const CardsSection = styled.div`
  display: grid;
  gap: 24px;

  /* ${mediaCSS({
    //gridTemplateColumns: { _: '1fr', medium: 'repeat(2, 1fr)' },
  })} */
`;

const Image = styled.img``;

const Card = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #e3eaef;
  padding: 24px;
  border-radius: 10px;
  background: #fff;
  transition: color 0.2s ease-in-out;

  ${Typography} {
    margin: 0;
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  &:hover {
    border: 2px solid #DEECFF;

    background: linear-gradient(
        0deg,
        rgba(222, 236, 255, 0.5),
        rgba(222, 236, 255, 0.5)
      ),
      linear-gradient(0deg, rgba(210, 222, 231, 0.2), rgba(210, 222, 231, 0.2));

    ${Image} {
      width: 26.7px;
      height: 26.7px;
    }
  }
`;

const ImageContainer = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 16px;
  background-size: cover;
  height: 54px;
  width: 54px;
  min-width: 54px;

  img {
    width: 24px;
    height: 24px;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  ${Typography} {
    margin: 0;
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  align-items: end;
  margin-top: 8px;

  img {
    margin-left: 8px;
    width: 11px;
    height: 18px;
  }
`;
