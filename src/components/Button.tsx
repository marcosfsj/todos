import React from 'react';
import styled from 'styled-components';

interface BtnProps {
  primary?: boolean;
  secondary?: boolean;
}

const Btn = styled.button<BtnProps>`
  color: ${({primary}: BtnProps) => (primary ? 'red' : 'blue')};
  width: 100px;
`;

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({children, primary, secondary, disabled, onClick}: ButtonProps) => {
  return (
    <Btn primary={primary} secondary={secondary} disabled={disabled} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default React.memo(Button);
