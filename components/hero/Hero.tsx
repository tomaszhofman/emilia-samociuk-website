import React, { memo } from 'react';
import styles from './hero.module.scss';
import { Button } from '@/components/button';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Hero = memo(() => {
  const { scroll } = useLocomotiveScroll();

  console.log(scroll);
  return (
    <section data-scroll-section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Emilia <br /> Samociuk
        </h1>
        <Button className={styles.btn}>Book a free consultation</Button>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export { Hero };
