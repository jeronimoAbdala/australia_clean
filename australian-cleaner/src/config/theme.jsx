import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D6A87C', // color beige/naranja suave
      contrastText: '#000',
    },
    background: {
      default: '#f9f9fa', // gris clarito
      paper: '#fff',
    },
    text: {
      primary: '#1a1a2e', // azul oscuro para textos principales
      secondary: '#4a4a6a', // texto secundario gris-azulado
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#1a1a2e',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      color: '#D6A87C',
    },
    body1: {
      fontSize: '1rem',
      color: '#4a4a6a',
    },
    button: {
      textTransform: 'none',
      fontWeight: '600',
    },
  },
});

export default theme;
