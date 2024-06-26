import ChevronDown from '@/assets/icons/ChevronDown';
import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
interface Props {
  text: string;
  color: 'black' | 'purple' | 'white';
  id?: string;
  next?: boolean;
  onClick?: any;
}

const Button = ({ text, color, id, onClick, next }: Props) => {
  const app = useRef(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('._anchorDown', {
        y: 10,
        repeat: -1,
        repeatDelay: 0.5,
        duration: 0.5,
        ease: 'none',
        yoyo: true,
      });
    }, app);

    return () => ctx.revert();
  }, []);

  //   Page click handler
  const handleRedirect = (id: string | undefined) => {
    lenis.scrollTo(`#${id}`, { offset: 0, duration: 1.5 });
  };

  return (
    <button
      // data-scrolllink={id}
      // href="#"
      onClick={onClick || (() => handleRedirect(id))}
      className="flex flex-col md:gap-y-[10px] items-center justify-center"
      ref={app}
    >
      <span
        className={`font-semibold font-primary xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]   ${
          (color === 'black' && 'text-secondary-text') ||
          (color === 'purple' && 'text-purple-200') ||
          (color === 'white' && 'text-white')
        }`}
      >
        {text}
      </span>
      <span className="_anchorDown">
        <ChevronDown
          stroke={`${
            (color === 'black' && 'stroke-secondary-text') ||
            (color === 'purple' && 'stroke-purple-200') ||
            (color === 'white' && 'stroke-white')
          }`}
        />
      </span>
    </button>
  );
};

export default Button;
