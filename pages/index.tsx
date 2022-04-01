import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <h1> change theme {theme}</h1>
      <button onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>d</button>
    </div>
  );
};

export default Home;
