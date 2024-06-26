import ResourcesHeader from '@/components/Header/ResourcesHeader';
import useGetContent from '@/hooks/useGetContent';
import ResourceCard from './ResourceCard';

const MoreResources = () => {
  const { resources } = useGetContent();
  return (
    <div className="bg-bg-gray  pb-[40px]">
      <ResourcesHeader />
      <div className="pt-[60px] md:pt-[60px] 2xl:pt-[70px]"></div>
      <div className="w-[335px] md:w-[648px] lg:w-[682px] xl:w-[1000px] 2xl:w-[1108px] 3xl:w-[1134px] mx-auto">
        <div className="text-center">
          <h2 className="text-[36px] leading-[43px] mb-[30px] md:text-[48px] md:leading-[58px] 2xl:text-[64px] 2xl:leading-[77px] font-bold text-secondary-text">
            {resources.header}
          </h2>
          <p className="text-[14px] leading-[175%] w-[100%]  lg:text-[18px] 3xl:w-[846px] lg:max-w-[550px] max-w-[560px] mx-auto font-normal text-[#656565]">
            {resources.subHeader}
          </p>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center md:items-start mt-[65px] mb-[100px] gap-[60px] xl:gap-[30px] 2xl:gap-[80px] 3xl:gap-[90px]">
          {resources.resourcesData.map((item: any) => (
            <ResourceCard key={`card_${item.id}`} item={item} />
          ))}
        </div>
        <p className="text-center text-[16px] leading-[175%] lg:text-[18px] xl:text-[16px] text-[#7b52a3] font-medium">
          <span className="text-[#5A2F84] font-bold">
            {resources.disclaimer} :
          </span>{' '}
          {resources.disclaimerText}
        </p>
      </div>
    </div>
  );
};

export default MoreResources;
