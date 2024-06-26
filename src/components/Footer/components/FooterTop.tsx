import useGetContent from '@/hooks/useGetContent';
import Image from 'next/image';
import PHAB from '../../../assets/images/phab.png';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';

const FooterTop = () => {
  const { footer } = useGetContent();
  return (
    <div className="bg-[rgba(176,198,255,0.53)] p-[70px_0]">
      <div className="container px-[20px] md:px-0">
        <div className="">
          <div className="flex flex-col md:flex-row flex-wrap justify-between 2xl:gap-x-[86px] xl:gap-x-0 lg:gap-x-[277px] md:gap-x-[107px] gap-y-[26px] md:gap-y-[70px] xl:gap-y-0">
            <FirstList />
            <SecondList />
            <ThirdList />
            <div className="">
              <h2 className="text-[16px] leading-[175%] mb-[20px] 4xl:mb-[15px] w-[204px] xl:w-[194px] 2xl:w-[204px] text-left md:text-center font-normal text-secondary-text">
                {footer.substance}
              </h2>
              <Image
                src={PHAB}
                alt="logo"
                className="2xl:w-[151px] 2xl:h-[151px] md:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
