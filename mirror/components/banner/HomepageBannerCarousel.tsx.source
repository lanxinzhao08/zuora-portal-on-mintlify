import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import { mediaCSS } from '@redocly/reference-docs';

// Reusable Banner component
export function HomepageBannerCarousel() {
  const banners = [
    {
      image: require('./images/rocket-launch.svg'),
      text: (
        <> Check out our latest blog: <Link href="/blogs/2025-3-18-turningfailureintogold/" target="_blank">How we turned payment failures into gold using machine learning</Link></>
      ),
    },
    {
      image: require('./images/signpost.svg'),
      text: (
        <> Got a question about Zuora Billing? Our <Link href="/faq/billing-faq/" target="_blank">Billing FAQ</Link> is in place to help.</>
      ),
    },
    {
      image: require('./images/code-block.svg'),
      text: (
        <> Stay up to date with our latest <Link href="/docs/guides/expand-filter-fields-sort/" target="_blank">Object Query</Link> page with more examples and SDK code samples!</>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [banners.length]);

  const currentBanner = banners[currentIndex];

  return (
    <Wrapper>
      <Sections>
        <Fade>
          <div>
            <img src={currentBanner.image} alt="Banner Icon" />
            <FirstLine>{currentBanner.text}</FirstLine>
          </div>
        </Fade>
      </Sections>
    </Wrapper>
  );
}

const fadeAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Fade = styled.div`
  animation: ${fadeAnimation} 1s ease-in-out;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
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
  color: #103426;
  padding: 20px 18px 16px 18px !important;
  border-radius: 8px;
  line-height: 1.4;
  vertical-align: top;

  ${mediaCSS({
    padding: { _: '42px 24px 40px', medium: '40px 56px' },
  })}
`;

const FirstLine = styled.span`
  vertical-align: top;
  text-decoration: none !important;
  color: #103426;
`;

const Link = styled.a`
  color: #00d2b9 !important;
  text-decoration: none !important;

  &:hover {
    text-decoration: underline;
  }
`;


/** 
  const randomBanner = React.useMemo(() => {
    const index = Math.floor(Math.random() * banners.length);
    return banners[index];
  }, []);

  return (
    <Wrapper>
      <Sections>
        <div>
          <img src={randomBanner.image} alt="Banner Icon" />
          <FirstLine>{randomBanner.text}</FirstLine>
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
  margin-bottom: 2rem;
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

  ${mediaCSS({
    padding: { _: '42px 24px 40px', medium: '40px 56px' },
  })}
`;

const FirstLine = styled.span`
  vertical-align: top;
  text-decoration: none !important;
`;

const Link = styled.a`
  color: #00d2b9 !important;
  text-decoration: none !important;

  &:hover {
    text-decoration: underline;
  }
`;
**/

