import { LangContext } from '@/context/LangContext';
import '@/styles/globals.css';
import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
//@ts-ignore
import { raf } from '@studio-freight/tempus';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // merge rafs
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  raf.add((time: number) => {
    gsap.updateRoot(time / 1200);
  }, 0);

  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';
}

export default function App({ Component, pageProps }: AppProps) {
  const lenis = useLenis(ScrollTrigger.update);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(ScrollTrigger.refresh, [lenis]);

  return (
    <LangContext>
      <Component {...pageProps} />
    </LangContext>
  );
}
