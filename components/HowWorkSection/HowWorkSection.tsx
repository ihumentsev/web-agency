import {HowItem, HowList, HowSection} from './HowWorkSection.styled'
import analist from '../../images/icons/Analysis Icon.svg'
import coding from '../../images/icons/Coding Icon (1).svg'
import confirm from '../../images/icons/Confirm Icon.svg'
import planer from '../../images/icons/Planner Icon.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
export default function HowWorkSection(){
    const stepsRef = useRef([]); // Массив ссылок на хардкод-элементы списка
  const [activeIndex, setActiveIndex] = useState(-1); // Индекс активного элемента

console.log(activeIndex);

  useEffect(() => {
    // Callback для Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = stepsRef.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    };

    // Создаём Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1, // Половина элемента должна быть видна
    });

    // Подключаем Observer ко всем ссылкам
    stepsRef.current.forEach((step) => observer.observe(step));

    // Очистка Observer
    return () => observer.disconnect();
  }, []);



    return (
        <>
         <HowSection>
            <h2>How It Works</h2>
            <HowList>
    <HowItem ref={(el) => {
    if (el) stepsRef.current[0] = el;
  }}
  className={activeIndex === 0 ? "active" : null}
  >
      <div >
        <Image src={analist} alt="Discovery"/>
      </div>
      <h3>01</h3>
      <h4>Discovery</h4>
      <p>We'll conduct a thorough analysis of your operations, market, and competition to identify the best solutions for you.</p>
    </HowItem>
    <HowItem ref={(el) => {
    if (el) stepsRef.current[1] = el;
  }}
  className={activeIndex === 1 ? "active" : null}>
      <div >
        <Image src={planer} alt="Planning"/>
      </div>
      <h3>02</h3>
      <h4>Planning</h4>
      <p>We'll create a detailed plan outlining your goals and the steps needed to achieve them effectively.</p>
    </HowItem>
    <HowItem ref={(el) => {
    if (el) stepsRef.current[2] = el;
  }}
  className={activeIndex === 2 ? "active" : null}>
      <div >
        <Image src={coding} alt="Planning"/>
      </div>
      <h3>03</h3>
      <h4>Development</h4>
      <p>We begin the design and development process, creating custom solutions for your specific business needs.</p>
    </HowItem>
    <HowItem ref={(el) => {
    if (el) stepsRef.current[3] = el;
  }}
  className={activeIndex === 3 ? "active" : null}>
      <div >
        <Image src={confirm} alt="Planning"/>
      </div>
      <h3>04</h3>
      <h4>Implementation</h4>
      <p>We implement our solution into your business operations and integrate them with other systems and platforms.</p>
    </HowItem>
  </HowList>


         </HowSection>
        </>
    )
}
