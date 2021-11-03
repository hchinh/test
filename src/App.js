import Topbar from './components/Topbar';
import DiscoverFeature from './features/Discover/index';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
