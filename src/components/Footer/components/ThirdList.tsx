import useGetContent from '@/hooks/useGetContent';
import Link from 'next/link';

const commonStyle =
  'text-[16px] leading-[200%] underline decoration-[#555555] cursor-pointer font-normal text-[#555555] hover:text-[#983fc2] hover:decoration-[#983fc2] transition ease-in-out duration-500';

const ThirdList = () => {
  const { footer } = useGetContent();

  return (
    <div className="w-[335px] md:w-[327px]">
      <h2 className="text-[16px] leading-[175%] mb-[6px] font-bold text-[#715D86]">
        {footer.resources.text}
      </h2>
      <ul className="flex flex-col">
        {footer.resources.links.map((item) => (
          <li key={item.id} className={commonStyle}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdList;
