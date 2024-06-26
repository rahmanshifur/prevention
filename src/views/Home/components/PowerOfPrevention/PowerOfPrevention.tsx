import Button from '@/components/Button/Button';
import useGetContent from '@/hooks/useGetContent';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';

const PowerOfPrevention = () => {
  const PowerOfPreventionRef = useRef<HTMLDivElement>(null!);
  const { whatIsPP, keepScroll } = useGetContent();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const PowerOfPrevTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._preventionSection',
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });

    PowerOfPrevTimeline.to(
      '._prevSubHeading, ._prevHeading, ._preventionPowerText, ._prevButton',
      {
        opacity: 1,
        y: 0,
        duration: 2,
      },
      'start'
    );

    const PowerOfPrevTrigger = ScrollTrigger.create({
      trigger: '._preventionSection',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          '._prevSubHeading, ._prevButton',
          { opacity: 0, y: '100px' },
          {
            opacity: 1,
            y: 0,
            duration: 2,
          }
        );
        gsap.fromTo(
          '._prevHeading',
          { opacity: 0, y: '140px' },
          {
            opacity: 1,
            y: 0,
            duration: 2,
          }
        );
        gsap.fromTo(
          '._preventionPowerText',
          { opacity: 0, y: '400px' },
          {
            opacity: 1,
            y: 0,
            duration: 2,
          }
        );
      },
    });

    return () => {
      PowerOfPrevTrigger.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      // data-scrolltarget="primaryPrevention"
      id="primaryPrevention"
      section-name="Power Of Prevention"
      ref={PowerOfPreventionRef}
      className="bg-[#E9FBD9] scroll-section relative w-full h-[100svh] flex justify-center items-center _preventionSection overflow-hidden"
    >
      <div className="text-center">
        <h4 className="lg:text-[24px] md:text-[20px] text-[14px] lg:leading-[29px] md:leading-[24px] leading-[17px] font-medium tracking-[0.2em] uppercase text-[#331F1A] _prevSubHeading opacity-0 w-[559px] mx-auto md:w-[100%] md:mx-0 lg:mb-[1px] md:mb-[4px] mb-[6px]">
          {whatIsPP.title}
        </h4>
        <h2 className="uppercase opacity-0 lg:text-[102px] md:text-[70px] text-[40px] lg:leading-[143px] md:leading-[98px] leading-[56px] font-[900] font-arges tracking-[0.0465em] text-[#664897]  _prevHeading w-[335px] mx-auto md:w-[100%] md:mx-0">
          {whatIsPP.header}
        </h2>
        <div
          data-scroll="overscroll"
          id="scroller"
          onWheel={(e) => e.stopPropagation()}
          className="lg:w-[889px] md:w-[688px] w-[335px] mx-auto _preventionPowerText opacity-0 mt-[20px] overflow-x-hidden overflow-y-scroll md:h-[240px] h-[375px] prevention-scroll"
        >
          <div
            data-scroll="overscroll"
            className="lg:max-w-[843px] md:max-w-[660px] max-w-[317px] ml-0"
          >
            <p className="content mb-[30px] text-[#505050] primary-text">
              {whatIsPP.content}
            </p>
            <p className="content mb-[30px] text-[#505050] primary-text">
              {whatIsPP.content2}
            </p>
            <p className="content mb-[30px] text-[#505050] primary-text">
              {whatIsPP.contentNext}
            </p>
          </div>
        </div>
        <div className="flex justify-center absolute left-1/2 -translate-x-1/2 lg:bottom-[40px] bottom-[30px] _prevButton z-10 opacity-0 ">
          <Button text={keepScroll} color="purple" id="colorado" />
        </div>
      </div>
    </section>
  );
};

export default PowerOfPrevention;
