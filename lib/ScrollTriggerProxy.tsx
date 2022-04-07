import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!scroll) return;
    const element = scroll?.el;
    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(element, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: element.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    scroll.on('scroll', (func: { direction: string }) => {
      document.documentElement.setAttribute('data-direction', func.direction);
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [scroll]);

  return null;
};
