import * as React from 'react';
import styled from 'styled-components';

import { H2 } from '@redocly/theme';

export function VideoSection() {
  return (
    <Wrapper>
      <H2 color="#202123" fontSize="24px">
        Watch the first OpenAI Developer Day keynote
      </H2>
      <Video
        src="https://www.youtube-nocookie.com/embed/U9mJuUkhUzk?si=lAV_QQ73MDMLOv5u"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 48px;

  ${H2} {
    font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Video = styled.iframe`
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  width: 100%;
  height: 500px;
`;
