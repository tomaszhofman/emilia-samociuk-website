import React, { ReactText, useEffect, useRef } from 'react';
// @ts-ignore
import CircleType from 'circletype';
import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = {
  children: ReactText;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
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
    <button ref={textRef} className={clsx(styles.btn, className)}>
      {children}
    </button>
  );
};

export { Button };
