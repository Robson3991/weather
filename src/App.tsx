import GlobalStyles from './styles/GlobalStyles';
import Home from 'components/pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from 'store/instance';
import Container from 'components/atoms/Container';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Container>
            <Home />
          </Container>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
