import { ThemeProvider } from '@root/theme';

const _providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default _providers;
