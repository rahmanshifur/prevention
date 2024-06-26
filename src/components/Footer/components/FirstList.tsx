import useGetContent from '@/hooks/useGetContent';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../../assets/icons/footer-logo.png';
import Facebook from './SvgIcons/Facebook';
import Instragram from './SvgIcons/Instragram';
import Twitter from './SvgIcons/Twitter';
import Youtube from './SvgIcons/Youtube';

const FirstList = () => {
  const [facebookColor, setFacebookColor] = useState(false);
  const [twitterColor, setTwitterColor] = useState(false);
  const [instragramColor, setInstragramColor] = useState(false);
  const [youtubeColor, setYoutubeColor] = useState(false);
  const { footer } = useGetContent();

  const handleRedirect = () => {
    (window as any).menuFunction('home');
  };

  return (
    <div className="md:w-[243px] w-[335px]">
      <Image
        onClick={() => handleRedirect()}
        src={Logo}
        alt="logo"
        className="w-[221px] h-[17px] cursor-pointer"
      />
      <div className="my-[26px]">
        <h3 className="text-[16px] leading-[175%] mb-[5px] font-bold text-[#4B395B]">
          {footer.visit}
        </h3>
        <h3 className="text-[16px] leading-[150%] font-normal text-[#555555]">
          {footer.visitContent}
        </h3>
      </div>
      <h3 className="text-[16px] leading-[175%] font-bold text-[#715D86]">
        {footer.contact}
      </h3>
      <div className="flex gap-[23px] mt-[12px]">
        <div
          className="cursor-pointer"
          onMouseOver={() => {
            setFacebookColor(true);
          }}
          onMouseLeave={() => {
            setFacebookColor(false);
          }}
        >
          <Facebook
            width={12.63}
            height={25}
            className="transition duration-700 hover:scale-110"
            stroke={facebookColor ? '#623B88' : '#555555'}
          />
        </div>
        <div
          className="cursor-pointer"
          onMouseOver={() => {
            setTwitterColor(true);
          }}
          onMouseLeave={() => {
            setTwitterColor(false);
          }}
        >
          <Twitter
            width={30}
            height={25}
            className="transition duration-700 hover:scale-110"
            stroke={twitterColor ? '#623B88' : '#555555'}
          />
        </div>
        <div
          className="cursor-pointer"
          onMouseOver={() => {
            setInstragramColor(true);
          }}
          onMouseLeave={() => {
            setInstragramColor(false);
          }}
        >
          <Instragram
            width={25}
            height={24}
            className="transition duration-700 hover:scale-110"
            stroke={instragramColor ? '#623B88' : '#555555'}
          />
        </div>
        <div
          className="cursor-pointer"
          onMouseOver={() => {
            setYoutubeColor(true);
          }}
          onMouseLeave={() => {
            setYoutubeColor(false);
          }}
        >
          <Youtube
            width={31.37}
            height={22.3}
            className="transition duration-700 hover:scale-110"
            stroke={youtubeColor ? '#623B88' : '#555555'}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstList;
