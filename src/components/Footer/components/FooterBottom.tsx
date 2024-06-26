import useGetContent from '@/hooks/useGetContent';
import Image from 'next/image';
import COLORADO from '../../../assets/icons/COLORADO.png';

const FooterBottom = () => {
  const { footer } = useGetContent();
  return (
    <div className="bg-primary p-[30px_0]">
      <div className="container">
        <div className="md:mx-[-15px] w-full">
          <div className="flex flex-col max-md:gap-[30px] md:flex-row md:items-center justify-between">
            <p className="text-[16px] leading-[160%] font-normal text-[#FFFFFF]">
              © {new Date().getFullYear()} {footer.copyrightText}
            </p>
            <Image
              src={COLORADO}
              alt="ColoRaDoLogo"
              className="w-[209px] h-[36px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
