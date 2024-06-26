import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Colorado from '../Colorado/Colorado';
import Resources from '../Resources/Resources';
import Hero from './components/Hero/Hero';
import PowerOfPrevention from './components/PowerOfPrevention/PowerOfPrevention';
import useVHScrollSmoother from './hooks/useVHScrollSmoother';
import { Lenis } from '@studio-freight/react-lenis';

const Home = () => {
  // const smoother = useScrollSmoother();
  // const newVHSmoother = useNewVHScrollSmoother();
  const vhSmoother = useVHScrollSmoother();

  return (
    <Lenis root options={{}}>
    <div id="scroll-wrapper" className="_parentSection scrollbar-hide">
      <Layout>
        <Hero />
        <PowerOfPrevention />
        {/* <PreventionWork /> */}
        <Colorado />
      </Layout>
      <Resources />
      <Footer />
    </div>
    </Lenis>
  );
};

export default Home;
