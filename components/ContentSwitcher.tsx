import * as React from 'react';
import styled from 'styled-components';
interface ContentSwitcherProps {
  tabs: { name: string; content: React.ReactNode }[];
}
export function ContentSwitcher({ tabs }: ContentSwitcherProps) {
  const [activeItemIndex, setActiveItemIndex] = React.useState<number>(0);
  const handleClickHeader = (index: number) => {
    setActiveItemIndex(index);
  };
  return (
    <Wrapper>
      <Headers>
        {tabs.map((tab, index) => (
          <Header
            key={index}
            isActive={index === activeItemIndex}
            onClick={() => handleClickHeader(index)}
            isLastEl={tabs.length - 1 === index}
            isFirst={index === 0}>
            {tab.name}
          </Header>
        ))}
      </Headers>
      <Content
        dangerouslySetInnerHTML={{ __html: tabs[activeItemIndex].content }}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 20px 0;
`;
const Headers = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  border: 1px solid #10a37f;
  border-radius: 8px;
`;
const Header = styled.div<{
  isActive: boolean;
  isLastEl: boolean;
  isFirst: boolean;
}>`
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ isActive }) => (isActive ? '#10a37f' : '#fff')};
  padding: 6px 12px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#10a37f')};
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
  border-radius: ${({ isLastEl, isFirst }) =>
    (isLastEl && '0 7px 7px 0') || (isFirst && '7px 0 0 7px') || '0'};
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? '#1a7f64' : 'rgba(16, 163, 127, 0.3)'};
  }
`;
const Content = styled.div`
  margin-top: 20px;
//  font-size: 16px;
  font-size: 14px;
`;