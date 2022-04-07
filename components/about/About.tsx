import React, { memo } from 'react';
import styles from './about.module.scss';

type AboutProps = {
  text: string;
};

const About = memo<AboutProps>(({ text }) => {
  return (
    <section data-scroll-section className={styles.about}>
      <div className={styles.container}>
        <p className={styles.paragraph}>{text}</p>
      </div>
    </section>
  );
});

About.displayName = 'About';
export { About };
