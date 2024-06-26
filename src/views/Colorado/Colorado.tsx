import ColoradoSlider from './components/ColoradoSlider/ColoradoSlider';
import Hero from './components/Hero';

const Colorado = ({ isTrue }: any) => {
  return (
    <section id="colorado">
      <Hero />
      {/* <Middle /> */}
      <ColoradoSlider />
    </section>
  );
};

export default Colorado;
