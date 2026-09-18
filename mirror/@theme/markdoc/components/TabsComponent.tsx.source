import * as React from 'react';
import styled from 'styled-components';

interface TabProps {
  title: string;
  children?: React.ReactNode;
}

interface TabsComponentProps {
  children?: React.ReactNode;
}

export function TabsComponent(props: TabsComponentProps) {
  const children = React.Children.toArray(props.children) as React.ReactElement<TabProps>[];
  const [activeItemIndex, setActiveItemIndex] = React.useState<number>(0);
  const handleClickHeader = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <Wrapper>
      <Headers>
        {children.map((child, index) => {
          const { title } = child.props;
          return (
            <Header
              key={index}
              isActive={index === activeItemIndex}
              onClick={() => handleClickHeader(index)}
              isLastEl={children.length - 1 === index}
              isFirst={index === 0}>
              {title}
            </Header>
          );
        })}
      </Headers>
      <TabContent>
        {children.map((child, idx) => {
          if (idx !== activeItemIndex) return undefined;
          return (
            <React.Fragment key={idx}>{child.props.children}</React.Fragment>
          );
        })}
      </TabContent>
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

//  border: 1px solid #10a37f; 
  border: 1px solid #00d2af;
  border-radius: 8px;
`;

const Header = styled.div<{
  isActive: boolean;
  isLastEl: boolean;
  isFirst: boolean;
}>`
  font-size: 15px;
  font-weight: 600;
  background-color: ${({ isActive }) => (isActive ? '#00d2af' : '#fff')};

//  background-color: ${({ isActive }) => (isActive ? '#10a37f' : '#fff')};
  padding: 6px 12px;

//  color: ${({ isActive }) => (isActive ? '#fff' : '#10a37f')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#00d2af')};
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
  border-radius: ${({ isLastEl, isFirst }) =>
    (isLastEl && '0 7px 7px 0') || (isFirst && '7px 0 0 7px') || '0'};
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? '#00fad0' : 'rgba(0, 210, 175, 0.3)'}; 
  }
  `;

const TabContent = styled.div`
  margin-top: 20px;
  font-size: 16px;
//  font-size: 14px;
`;

export const TabComponent = styled.div<TabProps>``;
