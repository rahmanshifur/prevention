import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';

const Footer = () => {
  return (
    <footer
      // data-scrolltarget="footer"
      section-name="footer"
      className="scroll-section"
      id="footer"
    >
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
