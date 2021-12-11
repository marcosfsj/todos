import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  height: 60px;
`;

const StyledLink = styled(Link)`
  padding: 15px;
`;

const NavBar = () => {
  return (
    <Bar>
      <StyledLink to="/todos-context-api">Context Api</StyledLink>
      <StyledLink to="/todos-page">React Query</StyledLink>
      <StyledLink to="/form-page">React hook form</StyledLink>
    </Bar>
  );
};

export default React.memo(NavBar);
