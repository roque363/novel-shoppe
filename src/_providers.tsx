import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from '@root/components/ui/sonner';
import { queryClient } from '@root/lib/queryClient';
import { ThemeProvider } from '@root/theme/theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        {children}
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
      <Toaster richColors position="top-center" theme="light" />
    </ThemeProvider>
  );
};

export default Providers;
