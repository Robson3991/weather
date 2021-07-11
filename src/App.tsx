import GlobalStyles from './styles/GlobalStyles';
import Home from 'components/pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
