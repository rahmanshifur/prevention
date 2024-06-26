import useGetContent from '@/hooks/useGetContent';
import classNames from 'classnames';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import cover from '../../assets/images/menu-cover.png';
import mobileCover from '../../assets/images/mobile-nav-bg.png';
import lgScreenBg from '../../components/HamburgMenu/components/images/lg-screen-bg.png';
import midScreenBg from '../../components/HamburgMenu/components/images/mid-screen-bg.png';
import CustomLogo from '../Footer/components/SvgIcons/CustomLogo';
import LanguagueButton from '../LanguagueButton';
import CloseIcon from './components/images/CloseIcon';

type MenuType = {
  toggle: boolean;
  setToggle: any;
};

const HamburgMenu = ({ toggle, setToggle }: MenuType) => {
  const menu: any = useRef();

  const tl: any = useRef();
  const [mouseOver, setMouseOver] = useState(false);
  const { menu: menuContent } = useGetContent();

  // const anotherTl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    // here is the animation
    tl.current.to(menu.current, {
      top: 0,
      duration: 0.3,
      display: 'block',
    });

    tl.current
      .to('._header', {
        marginTop: '40px',
        duration: 1,
        opacity: 1,
        delay: 0.5,
      })
      .to(
        '._link',
        {
          opacity: 1,
          duration: 0.5,
        },
        '<'
      )
      .to(
        '._mountain',
        { marginTop: '40px', duration: 0.5, ease: 'expo.easeOut', opacity: 1 },
        '<'
      );
  }, []);

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  //   Page click handler
  const handleRedirect = (id: any) => {
    (window as any).menuFunction(id);
    setToggle(false);
    let tween = gsap.to(menu.current, {
      height: 0,
      overflow: 'hidden',
      duration: 0.8,
      delay: 0.3,
      onComplete: () => {
        tween.revert();
        tl.current.revert();
      },
    });
  };

  return (
    <div className="overflow-hidden">
      <section
        ref={menu}
        className={classNames(
          '_menu w-[100vw] h-[100vh] top-[100vh] bg-primary fixed right-0 z-[999999999] hidden'
        )}
      >
        <div className="w-[100%] relative">
          <div className="flex justify-between items-center px-[20px] md:px-[60px] lg:px-[100px] 3xl:px-[340px]  opacity-0 _header relative">
            <div
              className="cursor-pointer"
              onMouseOver={() => setMouseOver(true)}
              onMouseLeave={() => setMouseOver(false)}
            >
              <Link href="/" onClick={() => handleRedirect('home')}>
                <CustomLogo
                  className={`${
                    mouseOver ? 'fill-white' : 'fill-[#D1C0E1]'
                  } w-[200px] h-[25px] md:w-[328px] md:h-[41px] transition-all duration-500 ease-in-out`}
                />
              </Link>
            </div>

            <div className="flex items-center gap-10 ">
              <div className="max-md:absolute max-md:left-[20px] max-md:top-[calc(100%+20px)] max-md:z-[99999]">
                <LanguagueButton color="white" />
              </div>

              <div
                onClick={() => setToggle(false)}
                className="header group flex gap-[8px] md:gap-[12px] items-center cursor-pointer"
              >
                <p className=" uppercase font-bold text-[18px] leadng-[21.6px] md:text-[20px] md:leading-[24px] text-[#D1C0E1] group-hover:text-white transition-all duration-500 ease-in-out">
                  {menuContent.closeText}
                </p>
                {/* <Image                                         
                src={CrossIcon}                                
                alt="x"
                width={21}
                height={21}
                className="w-[12px] h-[12px] md:w-[21px] md:h-[21px] transition-all duration-500 ease-in-out group-hover:rotate-[-90deg]"
              /> */}
                <CloseIcon />
              </div>
            </div>
          </div>

          <div>
            <Image
              src={cover}
              alt="menu cover"
              className="relative w-[100vw] h-[90vh] mt-[100vh] _mountain hidden lg:block opacity-0"
            />
            <Image
              src={mobileCover}
              alt="menu cover"
              className="relative w-[100vw] h-[90vh] mt-[100vh] _mountain md:hidden opacity-0"
            />
            <Image
              src={midScreenBg}
              alt="menu cover"
              className="relative w-[100vw] h-[90vh] mt-[100vh] _mountain hidden md:block opacity-0"
            />
            <Image
              src={lgScreenBg}
              alt="menu cover"
              className="relative w-[100vw] h-[90vh] mt-[100vh] _mountain hidden md:block opacity-0"
            />
            <div className="w-[100vw] h-[calc(100vh_-_190px)] md:h-[calc(100vh_-_230px)] flex justify-center items-center absolute top-20 right-0 ">
              <div className="flex flex-col gap-[50px]">
                {menuContent.menuLinks.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="text-center text-[#FFFFFF] uppercase font-semibold text-[24px] leading-[28.8px] md:text-[40px] md:leading-[48px] _link opacity-0"
                  >
                    <p
                      className="inline-block cursor-pointer animated-link"
                      onClick={() => handleRedirect(item.id)}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HamburgMenu;
