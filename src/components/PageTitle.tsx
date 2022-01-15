import {memo} from 'react';
import styled from 'styled-components';

const Title = styled.div`
  padding: 20px;
  width: 70vw;
`;

interface PageTitleProps {
  title: string;
}

const PageTitle = ({title}: PageTitleProps) => {
  return <Title>{title}</Title>;
};

export default memo(PageTitle);
