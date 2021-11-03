import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import DiscoverFeature from './features/Discover/index';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <DiscoverFeature />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
