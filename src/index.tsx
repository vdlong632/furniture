import ReactDOM from 'react-dom/client';

import { configureAxios } from 'config/axios';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'styles/global.css';
import App from 'app';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from 'contexts/loading';
import { FlashProvider } from 'contexts/flash';
import { Flash } from './app/components/elements/Flash';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material';
import { CartProvider } from 'contexts/cart';
import { WishProvider } from 'contexts/wish';

// Initialize axios
configureAxios();

/**
 * Root App
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <CartProvider>
          <WishProvider>
            <FlashProvider>
              <App />
              <Flash />
            </FlashProvider>
          </WishProvider>
        </CartProvider>
      </LoadingProvider>
    </ThemeProvider>
  </BrowserRouter>
);
