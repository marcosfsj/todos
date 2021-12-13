import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  color: ${({primary, theme}) =>
    primary ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText};
  background-color: ${({primary, theme}) =>
    primary ? theme.palette.primary.main : theme.palette.secondary.main};
  width: 100%;
  height: 40px;
`;

export default Button;
