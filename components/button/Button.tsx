import React, { ReactText, useEffect, useRef } from 'react';
// @ts-ignore
import CircleType from 'circletype';
import styles from './button.module.scss';

type ButtonProps = {
  children: ReactText;
};

const Button = ({ children }: ButtonProps) => {
  const textRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const circleType = new CircleType(textRef.current);
    circleType.radius;
    circleType.refresh();
    return () => {
      circleType.destroy();
    };
  }, []);
  return (
    <button ref={textRef} className={styles.btn}>
      {children}
    </button>
  );
};

export { Button };
