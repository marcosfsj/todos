import {DefaultTheme} from 'styled-components';

const themePrimary: DefaultTheme = {
  borderRadius: '5px',

  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
    },
    primary: {
      main: 'rgb(46, 170, 220)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgb(209, 224, 230)',
      contrastText: '#222831',
    },
  },
};

export default themePrimary;
