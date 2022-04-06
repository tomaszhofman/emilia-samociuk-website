import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/loader';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { DividerLine } from '@/components/divider-line';

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
      <Hero />
      <About
        text={
          'Z wykształcenia Product & Brand Managerka. Branża nieruchomości od razu okazała się zawodowym strzałem w dziesiątkę  '
        }
      />
    </div>
  );
};

export default Home;
