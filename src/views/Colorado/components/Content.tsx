import useGetContent from '@/hooks/useGetContent';

const Content = () => {
  const { coloradoHero } = useGetContent();

  return (
    <div className="max-w-[1064px] mx-auto">
      <h3 className="uppercase font-[500] lg:text-[24px] md:leading-[28.8px] md:text-[18px]  text-[16px] leading-[19px] tracking-[0.2em] text-[#33333]">
        {coloradoHero.title}
      </h3>
      <h1 className="font-arges font-[900] xl:text-[102px] lg:text-[72px] xl:pt-[35px] md:pt-[15px] pt-[8px] xl:pb-4 md:text-[60px] md:leading-[85px] text-[38px] text-[#664897] tracking-[0.0465em] uppercase">
        {coloradoHero.header}
      </h1>
      <p className="text-center font-secondary xl:text-[18px] lg:leading-[32px] lg:text-[16px] md:text-[14px] md:leading-[24px] text-[12px] leading-[21px] tracking-[175%] xl:max-w-[870px] lg:max-w-[660px] md:max-w-[577px] max-w-[335px] mx-auto  text-[#444]">
        {coloradoHero.content}
      </p>
    </div>
  );
};

export default Content;
