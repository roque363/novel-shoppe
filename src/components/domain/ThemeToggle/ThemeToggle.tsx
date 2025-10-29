import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@root/components/ui/button';
import { useTheme } from '@root/theme/theme-provider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handlThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={theme === 'light' ? 'ghost' : 'ghost'}
        size="icon"
        aria-label={theme === 'light' ? 'Tema claro' : 'Tema oscuro'}
        onClick={handlThemeClick}
        title={theme === 'light' ? 'Claro' : 'Oscuro'}
      >
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default ThemeToggle;
