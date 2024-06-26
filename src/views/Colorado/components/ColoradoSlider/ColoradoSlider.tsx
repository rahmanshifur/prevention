import Button from '@/components/Button/Button';
import HamburgMenu from '@/components/HamburgMenu/HamburgMenu';
import ColoradoHeader from '@/components/Header/ColoradoHeader';
import useGetContent from '@/hooks/useGetContent';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useScrollbarToggle from '@/hooks/useScrollbarToggle';
import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';
import { sliderData } from '../../constants';
import SliderItem from '../SliderItem';

const ColoradoSlider = () => {
  const sliderWrapper: any = useRef();
  const sliderImg: any = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const lenis = useLenis();
  const { coloradoSlider1, coloradoSlider2, keepScroll } = useGetContent();

  useScrollbarToggle(openMenu);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const coloradoItem = gsap.utils.toArray('._coloradoSliderItem');

    let to = gsap.to(coloradoItem, {
      xPercent: -100 * (coloradoItem.length - 1),
      ease: 'none',
      scrollTrigger: {
        id: 'test_scroll_trigger',
        trigger: '._coloradoSlider',
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        // anticipatePin: 1,
        snap: 1 / (coloradoItem.length - 1),
        end: () => '+=' + window.innerWidth,
      },
    });

    gsap.to('._coloradoIndicatorLine', {
      width: '100%',
      scrollTrigger: {
        trigger: '._coloradoSlider',
        start: 'top top',
        end: '169% top',
        scrub: 1,
      },
    });

    gsap.set('._coloradoPrioritizingTrigger', { perspective: 200 });

    gsap.fromTo(
      '.prioritizingImg',
      { rotationY: 90, rotationX: 0 },
      {
        scrollTrigger: {
          trigger: '._coloradoPrioritizingTrigger',
          // containerAnimation: to,
          scrub: 5,
          start: 'center 95%',
          end: 'left left',
          markers: false,
        },
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
      }
    );

    gsap.set('._coloradoBuildingTrigger', {
      perspective: 200,
    });

    gsap.fromTo(
      '.buildingImg',
      { rotationY: 90, rotationX: 0 },
      {
        scrollTrigger: {
          trigger: '._coloradoBuildingTrigger',
          scrub: 5,
          containerAnimation: to,
          start: 'center bottom',
          end: 'bottom center',
        },
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
      }
    );
  }, []);

  const handleOnClick = () => {
    const coloradoItem = gsap.utils.toArray<HTMLElement>(
      '._coloradoSliderItem'
    );

    const triggers = ScrollTrigger.getById('test_scroll_trigger');
    console.log(triggers?.progress);
    if ((triggers?.progress || 0) < 1) {
      lenis.scrollTo('.dd', {
        offset: 0,
        duration: 1,
      });
    } else {
      lenis.scrollTo('#resources', { offset: 0, duration: 1.5 });
    }
  };

  return (
    <>
      <section
        // data-scrolltarget="colorado_three"
        id="colorado_three"
        section-name="Prevention In Colorado Three"
        className="relative colorado-slider scroll-section"
      >
        <div className="bg-[#087C3D] h-[100svh] flex flex-col justify-center overflow-hidden relative _coloradoSlider">
          <ColoradoHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />

          <div className="flex w-full">
            <div className="flex items-center">
              <div className="flex items-center w-[100vw] _coloradoSliderItem">
                <div className="container md:px-0 _coloradoPrioritizingTrigger">
                  <SliderItem
                    title={coloradoSlider1.header}
                    subtitle={coloradoSlider1.title}
                    content={coloradoSlider1.content}
                    imgSrc={sliderData[0].imgSrc}
                    sliderImg="prioritizingImg"
                    sliderImgStyle="bottom-[40px] left-[8px] md:left-[10px] lg:bottom-[50px] xl:bottom-[60px] xl:left-[13px] 2xl:bottom-[80px] 2xl:left-[15px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center w-[100vw] _coloradoSliderItem">
                <div className="container md:px-0 _coloradoBuildingTrigger">
                  <SliderItem
                    title={coloradoSlider2.header}
                    subtitle={coloradoSlider2.title}
                    content={coloradoSlider2.content}
                    imgSrc={sliderData[1].imgSrc}
                    sliderImg="buildingImg"
                    sliderImgStyle="w-[234px] h-[177px] bottom-[52px] left-[7px] md:w-[227px] md:h-[173px] md:bottom-[40px] md:left-[10px] lg:w-[290px] lg:h-[232px] lg:bottom-[50px] lg:left-[20px] xl:w-[365.39px] xl:h-[291.53px] xl:left-[18px] xl:bottom-[54px] 2xl:w-[365.39px] 2xl:h-[352.53px] 2xl:bottom-[66px] 2xl:left-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-3 xl:mt-12 md:mt-0 dd">
            <div className="flex flex-col md:flex-row">
              <div className="2xl:max-w-[683px] xl:max-w-[571px] lg:max-w-[462px] md:max-w-[314px] w-full"></div>

              <div className="mx-auto xl:w-[345px] md:w-[280px] w-full">
                <div className="relative flex justify-center ">
                  <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
                  <div className="absolute top-0 left-0 w-[35%] h-[2px] bg-orange-100 _coloradoIndicatorLine"></div>
                </div>
                <div className="flex justify-between w-full mt-[10px]">
                  <span className="font-secondary text-[16px] leading-[160%] text-white">
                    1
                  </span>
                  <span className="font-secondary text-[16px] leading-[160%] text-white">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute lg:bottom-[40px] bottom-0 left-[50%] translate-x-[-50%] z-[99]">
            <Button
              onClick={handleOnClick}
              text={keepScroll}
              color="white"
              id="resources"
            />
          </div>
        </div>
        <HamburgMenu
          toggle={openMenu}
          setToggle={setOpenMenu}
          // setIsWhite={setIsWhite}
        />
      </section>
    </>
  );
};

export default ColoradoSlider;
