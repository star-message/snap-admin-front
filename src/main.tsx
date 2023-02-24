import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryFunctionContext, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider, createTheme } from '@mui/material';
import { makeRequest } from './core/api/axios';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      queryFn: ({ queryKey: [url, data] }: QueryFunctionContext) =>
        makeRequest({ method: 'get', url: url as string, data }).then(({ data }) => data),
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
