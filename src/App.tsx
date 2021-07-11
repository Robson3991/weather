import GlobalStyles from './styles/GlobalStyles';
import Home from 'components/pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
