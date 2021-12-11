import styled from 'styled-components';

interface InputProps {
  primary?: boolean;
  secondary?: boolean;
}

const Input = styled.input<InputProps>`
  color: ${({primary, theme}) =>
    primary ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText};
  background-color: ${({primary, theme}) =>
    primary ? theme.palette.primary.main : theme.palette.secondary.main};
  width: 100px;
`;

export default Input;
