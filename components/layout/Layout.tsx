import { ThemeProvider } from 'next-themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import { ReactNode, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { ScrollTriggerProxy } from '../../lib/ScrollTriggerProxy';
import { Header } from '@/components/header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      watch={[asPath]}
      containerRef={containerRef}
    >
      <ScrollTriggerProxy />
      <ThemeProvider enableSystem={true} storageKey="theme">
        <div data-scroll-container ref={containerRef}>
          <Header />
          {children}
        </div>
      </ThemeProvider>
    </LocomotiveScrollProvider>
  );
};

export { Layout };
