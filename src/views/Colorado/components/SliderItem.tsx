import PositionImg from '@/assets/images/colorado/sliderImg-bg.svg';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

interface SliderItemProps {
  subtitle: string;
  title: string;
  content: string;
  imgSrc: StaticImageData;
  imgWrap?: any;
  slideWrap?: any;
  sliderImg: any;
  sliderImgStyle?: string;
}

const SliderItem = ({
  subtitle,
  title,
  content,
  imgSrc,
  sliderImg,
  sliderImgStyle,
}: SliderItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 text-left md:justify-between md:flex-row md:gap-0">
      <div className="2xl:max-w-[725px] xl:max-w-[571px] lg:max-w-[462px] md:max-w-[350px] w-full md:order-[0] order-[1]">
        <h4 className="text-[#FFF1E7] text-[20px] leading-6 tracking-[0.2em] uppercase pb-[15px]">
          {subtitle}
        </h4>
        <h3 className="pb-6 text-white sub-heading">{title}</h3>
        <div>
          <p className="text-white content">{content}</p>
        </div>
      </div>
      <div className="2xl:max-w-[481px] xl:max-w-[399px] lg:max-w-[326px] md:max-w-[246px] max-w-[265px] md:order-1 order-[-1] relative">
        <Image
          src={PositionImg}
          alt="slider image"
          className={classNames('w-full h-full', sliderImg)}
        />
        <Image
          src={imgSrc}
          alt="slider image"
          className={classNames(
            'absolute w-[245.17px] h-[120.64px] md:w-[226.66px] md:h-[111.55px] lg:w-[301.6px] lg:h-[148.43px] xl:w-[369.14px] xl:h-[181.53px] 2xl:w-[445px] 2xl:h-[219px]',
            sliderImgStyle
          )}
        />
      </div>
    </div>
  );
};

export default SliderItem;
