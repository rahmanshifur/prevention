import useGetContent from '@/hooks/useGetContent';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useScrollbarToggle from '@/hooks/useScrollbarToggle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState } from 'react';
import Hamburg from '../Footer/components/SvgIcons/HamburgIcon';
import PowerOfPrevention from '../Footer/components/SvgIcons/PowerOfPrevention';
import HamburgMenu from '../HamburgMenu/HamburgMenu';
import LanguagueButton from '../LanguagueButton';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  useScrollbarToggle(openMenu);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px) and (max-width: 1023px)',
        isDesktop: '(min-width: 1024px)',
      },
      (context) => {
        //@ts-ignore
        const { isMobile, isTablet, isDesktop } = context.conditions;

        gsap.to('._topNav', {
          duration: 1.5,
          //@ts-ignore
          top: () => {
            if (isMobile) {
              return '20px';
            } else if (isTablet) {
              return '30px';
            } else if (isDesktop) {
              return '40px';
            }
          },
          opacity: 1,
          ease: 'none',
        });
      }
    );

    // const handleResize = () => {
    //   if (mediaQuery.matches) {
    //     navTop = '40px';
    //   } else {
    //     navTop = '20px';
    //   }
    //   tl.to('._topNav', {
    //     duration: 1.5,
    //     top: navTop,
    //     opacity: 1,
    //     ease: 'none',
    //   });
    // };

    // window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    //   tl.kill();
    // };
  }, []);

  //   Page click handler
  const handleRedirect = () => {
    (window as any).menuFunction('home');
  };

  const { menu } = useGetContent();

  return (
    <header>
      <div
        id="header-section"
        className="container px-[20px] md:px-0 md:top-[100px] top-[40px] left-0 right-0 bg-transparent z-[99999] opacity-0 _topNav fixed"
      >
        <div className="flex items-center justify-between">
          <PowerOfPrevention
            width={328}
            height={41}
            color={'#623B88'}
            className="w-[200px] h-[25px] md:w-[328px] md:h-[41px] cursor-pointer"
            onClick={handleRedirect}
          />
          <div className="flex items-center gap-[35px]">
            {/* Langauge Button */}
            <div className="hidden md:block">
              <LanguagueButton color="black" />
            </div>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer"
            >
              <div className="flex gap-[10px] md:gap-[8px] items-center">
                <h2
                  className={`text-[18px] _textColor leading-[22px] md:text-[20px] md:leading-[24px] font-bold uppercase ${'text-purple-300'}`}
                >
                  {menu.menuText}
                </h2>
                <Hamburg width={18} height={13.68} color={'#623B88'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HamburgMenu
        toggle={openMenu}
        setToggle={setOpenMenu}
        // setIsWhite={setIsWhite}
      />
    </header>
  );
};

export default Header;
