'use client';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '@/store/store';
import { theme } from '@/styles/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
} 