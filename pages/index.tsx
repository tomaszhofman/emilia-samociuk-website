import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/loader';
import { Header } from '@/components/header';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState<boolean>(false);

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
      <Header />
    </div>
  );
};

export default Home;
