import React from 'react';
import { useTheme } from 'next-themes';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const invokeTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  const options = {
    className: styles.button,
    onClick: invokeTheme,
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.navigation}>
          <Link href={'/about'}>
            <a href={'/about'} className={styles.label}>
              about
            </a>
          </Link>
          {theme === 'light' ? <MoonIcon {...options} /> : <SunIcon {...options} />}
        </nav>
      </div>
    </header>
  );
};

export { Header };
