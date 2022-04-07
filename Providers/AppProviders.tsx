import { ThemeProvider } from 'next-themes';
import {
  LocomotiveScrollProvider,
  LocomotiveScrollProviderProps,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { ScrollTriggerProxy } from '../lib/ScrollTriggerProxy';

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
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
        <main data-scroll-container ref={containerRef}>
          {children}
        </main>
      </ThemeProvider>
    </LocomotiveScrollProvider>
  );
};
