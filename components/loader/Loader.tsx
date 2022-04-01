import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './loader.module.scss';
import gsap from 'gsap';

type LoaderProps = {
  setLoading: (isLoading: boolean) => void;
};

const Loader = ({ setLoading }: LoaderProps) => {
  const strokeRef = useRef(null);
  const emblemsRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(strokeRef.current, {
      delay: 0.2,
      duration: 0.4,
      opacity: 0.5,
      width: '0%',
    });
    timeline.to(emblemsRef.current, {
      duration: 0.6,
      y: '20%',
      ease: 'power4.out',
      opacity: 0,
      onComplete: () => {
        setLoading(false);
      },
    });
  }, []);

  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div ref={emblemsRef} className={styles.emblems}>
          <span className={styles.emblem}>E</span>
          <span className={styles.emblem}>S</span>
        </div>
        <div ref={strokeRef} className={styles.stroke} />
      </div>
    </div>
  );
};

export { Loader };
