import styles from '../style';
import { logoHeroWEBPGrande, instagram} from '../assets';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  `}>

      <div className={`${styles.flexStart} md:flex-row flex-col justify-evenly w-full items-center`}>
        <img src={logoHeroWEBPGrande} alt="logoTerraMaria" className='w-[266px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} text-center mt-4 max-[310px]`}>El mejor lugar para hospedarte en la ciudad de Salta.</p>
        <a target='_blank' href="https://www.instagram.com/terramariaapartments/">
        <img className='md:mt-0 mt-5' src={instagram} alt="logo instagram" />
        </a>
      </div>

  </section>
);


export default Footer