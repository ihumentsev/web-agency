// components/Marquee.js
import logo1 from '../../images/icons/Logo 1.svg'
import logo2 from '../../images/icons/Logo 2.svg'
import logo3 from '../../images/icons/Logo 3.svg'
import logo4 from '../../images/icons/Logo 4.svg'
import logo5 from '../../images/icons/Logo 5.svg'
import Image from 'next/image';
import { MarqueeBox,
    MarqueeInner,
    MarqueeLogo} from './Marquee.styled'
const Marquee = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];

  return (
    <MarqueeBox>
      <MarqueeInner>
        {logos.map((logo, index) => (
          <MarqueeLogo key={index}>
            <Image src={logo} alt={`logo-${index}`} width={150} height={100} />
          </MarqueeLogo>
        ))}
        {/* Дублируем логотипы для бесконечной прокрутки */}
        {logos.map((logo, index) => (
          <MarqueeLogo key={`dup-${index}`} >
            <Image src={logo} alt={`logo-dup-${index}`} width={150} height={40} />
          </MarqueeLogo>
        ))}
      </MarqueeInner>
    </MarqueeBox>
  );
};

export default Marquee;
