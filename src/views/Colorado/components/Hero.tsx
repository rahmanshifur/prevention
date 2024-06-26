import Button from '@/components/Button/Button';
import useGetContent from '@/hooks/useGetContent';
import useWindowDimensions from '@/hooks/useWindowSize';
import classNames from 'classnames';
import { gsap } from 'gsap';
import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Clouds from '../partials/Clouds';
import CloudsMobile from '../partials/CloudsMobile';
import Mountain1 from '../partials/Mountain1';
import Mountain1Mobile from '../partials/Mountain1Mobile';
import MountainWater from '../partials/MountainWater';
import TressBack from '../partials/TressBack';
import TressFront from '../partials/TressFront';
import Container from './Container';
import Content from './Content';

const Hero = () => {
  const container: any = useRef(null);
  const tl: MutableRefObject<any> = useRef();
  const { keepScroll } = useGetContent();

  const { width, height }: any = useWindowDimensions();

  const [isLowHeightXL, setIsLowHeightXL] = useState(false);
  const [isLowHeight3XL, setIsLowHeight3XL] = useState(false);
  const [isHBigThanW, setIsHBigThanW] = useState(false);

  useEffect(() => {
    width > 1200 && width < 1920 && height < 800 && setIsLowHeightXL(true);
    width > 1919 && height < 1000 && setIsLowHeight3XL(true);
    width > 767 && height > width && setIsHBigThanW(true);
  }, [width, height]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          start: 'center center',
          anticipatePin: 1,
          markers: false,
        },
        defaults: { ease: 'none' },
      });

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: 'top center',
            anticipatePin: 1,
            // markers: true,
          },
          defaults: { ease: 'none' },
        })
        .from('._tress-front', {
          yPercent: 100,
          duration: 1,
        })
        .from('._tress-back', {
          yPercent: 100,
          duration: 1.5,
          ease: 'power2.out',
        })
        .from('._mountain-water', {
          yPercent: 100,
          duration: 1,
        })
        .from(
          '._scrolling-btn',
          {
            bottom: '-100%',
            duration: 1,
            ease: 'power4.out',
          },
          '<1'
        )

        .from('._mountain-1', {
          yPercent: 100,
          duration: 2,
          ease: 'power2.out',
        })
        // .from('._mountain-2', {
        //   yPercent: 100,
        //   duration: 1,
        // })
        .from('._text-content', {
          yPercent: 100,
          bottom: '-100%',
          duration: 1,
          ease: 'none',
        })
        .from('._clouds', {
          top: '-100%',
          duration: 2,
          ease: 'expo.out',
        });

      return () => {
        tl.current.kill();
        tl.current = null;
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      // data-scrolltarget="colorado_one"
      id="colorado_one"
      section-name="Prevention In Colorado One"
      className="scroll-section"
    >
      <div ref={container}>
        <Container className="bg-[#ECD9CA]">
          <div>
            <TressFront />
            <TressBack />
            <MountainWater isHBigThanW={isHBigThanW} />
            <Mountain1
              isLowHeightXL={isLowHeightXL}
              isLowHeight3XL={isLowHeight3XL}
              isHBigThanW={isHBigThanW}
            />
            <Mountain1Mobile />
            {/* <Mountain2 /> */}
            {/* <Mountain2Mobile /> */}
            <Clouds isHBigThanW={isHBigThanW} />
            <CloudsMobile />

            {/* Overlap */}
            <div
              className="w-full md:h-[50px] h-[30px] absolute left-0 bottom-0 z-[9999]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(8,124,62,0) 24%, rgba(8,124,61,1) 94%)',
              }}
            ></div>
            <div
              className={classNames(
                '_text-content absolute z-[99] xl:top-1/2  md:top-[60%] top-[73%]  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full',
                isHBigThanW && '!top-[65%]'
              )}
            >
              <Content />
            </div>

            {/* Keep Scrolling Button */}
            <div className="absolute z-[9999] 2xl:bottom-[15%] lg:bottom-[12%] md:bottom-[8%] bottom-[3%] left-1/2 -translate-x-1/2 _scrolling-btn">
              <Button text={keepScroll} color="black" id="colorado_three" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
