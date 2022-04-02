import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/loader';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (!bodyElement) return;
    loading ? bodyElement.classList.add('loading') : bodyElement.classList.remove('loading');
  }, [loading]);

  if (!mounted || loading) return <Loader setLoading={setLoading} />;
  return (
    <div>
      <h1> change theme {theme}</h1>
      <button onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
        change
      </button>
    </div>
  );
};

export default Home;
