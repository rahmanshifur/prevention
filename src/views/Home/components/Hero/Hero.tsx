import Button from '@/components/Button/Button';
import useGetContent from '@/hooks/useGetContent';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import BannerMountain from '../../partials/BannerMountain';
import GroundBuildings from '../../partials/GroundBuildings';
import LeftBuildings from '../../partials/LeftBuildings';
import LeftGirl from '../../partials/LeftGirl';
import RightGirls from '../../partials/RightGirls';
import RightSchoolBuildings from '../../partials/RightSchoolBuildings';
import preventionGardeners from '/public/images/Home/prevention-gardeners.gif';
import preventionPhone from '/public/images/Home/revention-phone.gif';
import valueOfPrevention from '/public/images/Home/value-of-prevention-jenga.gif';

const Hero = () => {
  const heroRef: any = useRef(null);

  // Banner multi-lan content
  const { hero } = useGetContent();

  // Gsap Animations
  useIsomorphicLayoutEffect(() => {
    const tl1 = gsap.timeline({
      defaults: { duration: 1.5, ease: 'sine.out', delay: 0.1 },
    });

    const cloudTl = gsap.timeline({
      defaults: { duration: 1.3, ease: 'sine.out', delay: 0.1 },
    });

    window.requestAnimationFrame(() => {
      tl1
        .to(
          '._topScrollingBtn, ._thePower, ._topBannerContent, ._sun, ._mountain',
          { y: 0 },
          'start'
        )
        .to('._prevention', { y: 0, delay: 0.2 }, 'start');

      cloudTl
        .to('._cloud1', { y: 0 }, 'start')
        .to('._cloud2, ._cloud3, ._cloud4', { y: 0, delay: 0 }, 'start');
    });
  }, []);

  return (
    <section
      data-scrolltarget="home"
      id="home"
      section-name="Hero"
      ref={heroRef}
      className={`overflow-hidden scroll-section`}
    >
      <div className="relative flex flex-col h-[100svh]">
        <div className="relative w-full h-full bg-[#E1DBD6]">
          <BannerMountain />
          <div className="absolute lg:bottom-[-17px] xl:bottom-[-21px] 2xl:bottom-[-24px] 2xxl:bottom-[-27px] 3xl:bottom-[-35px] md:bottom-[-12px] bottom-[-10px] left-0 right-0 w-full z-[1]">
            <GroundBuildings />
          </div>
        </div>

        <div className="relative w-full xl:min-h-[344px] xl:max-h-[344px] lg:min-h-[295px] lg:max-h-[295px] md:min-h-[282px] md:max-h-[282px] min-h-[392px] max-h-[392px] bg-[#C9F2A9]">
          <LeftBuildings />
          <LeftGirl />
          <RightSchoolBuildings />
          <RightGirls />
          <Image
            className="absolute lg:right-[16.5%] md:right-[16%] right-[32px] xl:top-[-21px] lg:top-[-16px] top-[-10px] xl:w-[95px] lg:w-[68px] md:w-[52px] w-[44px] xl:h-[65px] lg:h-[47px] md:h-[35px] h-[30px] z-[2]"
            src={valueOfPrevention}
            alt=""
          />
          <Image
            className="absolute xl:left-[35px] lg:left-[20px] md:left-[18px] left-[14px] xl:bottom-[95px] lg:bottom-[117px] md:bottom-[81px] bottom-[193px] xl:w-[124px] lg:w-[89px] md:w-[68px] w-[36px] xl:h-[80px] lg:h-[58px] md:h-[44px] h-[23px]"
            src={preventionPhone}
            alt=""
          />
          <Image
            className="absolute xl:left-[247px] lg:left-[171px] md:left-[138px] left-[65px] xl:bottom-[30px] lg:bottom-[55px] md:bottom-[33px] bottom-[163px] xl:w-[176px] lg:w-[178px] md:w-[115px] w-[66px] xl:h-[87px] lg:h-[88px] md:h-[56px] h-[32px]"
            src={preventionGardeners}
            alt=""
          />
          <div className="absolute left-1/2 translate-x-[-50%] xl:top-[50px] md:top-[30px] top-[36px] 2xl:w-[779px] lg:w-[540px] md:w-[465px] w-[335px] z-10">
            <p className="text-center font-secondary font-medium 2xl:text-[20px] md:text-[16px] text-[14px] leading-[175%] text-[#444444] translate-y-96 _topBannerContent">
              {hero.content}
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 lg:bottom-[40px] bottom-[30px] z-10 translate-y-64 _topScrollingBtn">
          <Button text={hero.button} color="black" id="primaryPrevention" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
