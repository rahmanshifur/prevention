import Image from 'next/image';

const ResourceCard = ({ item }: any) => {
  return (
    <div className="w-[216px] group cursor-pointer">
      <div
        className={`${item.id === 1 && 'bg-[#9887ce]'} ${
          item.id === 2 && 'bg-[#A2D0EA]'
        } ${item.id === 3 && 'bg-[#A2EAD0]'} ${
          item.id === 4 && 'bg-[#EAC9A2]'
        } w-[146px] h-[146px] mx-auto rounded-full flex items-center justify-center`}
      >
        <Image
          src={item.img}
          alt="logo"
          className={`${
            item.id === 2 && 'ml-[15px]'
          } w-[80px] h-[80px] transition-all duration-700 ease-in-out group-hover:scale-110`}
        />
      </div>
      <h3 className="text-[16px] leading-[175%] block mt-[17px] font-normal group-hover:text-[#983fc2] group-hover:decoration-[#983fc2] group-hover:underline text-secondary-text text-center">
        {item.title}
      </h3>
    </div>
  );
};

export default ResourceCard;
