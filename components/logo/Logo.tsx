import React from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <a href={'/'} className={styles.logo}>
        ES
      </a>
    </Link>
  );
};

export { Logo };
