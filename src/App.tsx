import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import {useStore} from './store'; 
import createEmotionCache from './utility/createEmotionCache'; 
import lightThemeOptions from './styles/theme/lightThemeOptions'; 
import darkThemeOptions from './styles/theme/darkThemeOptions'; 
import './styles/globals.css';
import PokemonSearchContainer from './components/PokemonSearchContainer';

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

const App: React.FC = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
<PokemonSearchContainer/>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
