import styles from '../style';
import './hero.css';
import { Zoom } from 'react-awesome-reveal';

const DescriptionHero = () => {
  return (
    <section className='flex h-full flex-col items-center justify-center'>
        <h3
            className={`${styles.paragraph} text-[30px] text-center text-black transparentBg `}>
              <Zoom>
                  Descubre nuestros 4 aparts en Terra María, ubicados en el corazón de Salta para tu comodidad. Cada uno con características únicas. ¡Tu escapada perfecta comienza aquí!
              </Zoom>
            </h3>
            <span className='md:mt-72'></span>
    </section>
  )
}

export default DescriptionHero