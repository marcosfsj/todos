import React from 'react';
import styled from 'styled-components';

interface BtnProps {
  readonly primary?: boolean;
  readonly secondary?: boolean;
}

const Btn = styled.button<BtnProps>``;

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

const Button = ({children, primary, secondary}: ButtonProps) => {
  return (
    <Btn primary={primary} secondary={secondary}>
      {children}
    </Btn>
  );
};

export default React.memo(Button);
