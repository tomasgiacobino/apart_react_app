import styles from '../style';
import {logoHeroWEBPGrande} from '../assets';
// import { Zoom } from 'react-awesome-reveal';


const Hero = () => (


  <section id='home' className={`flex
  flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6 `}>

      <div className='flex flex-col justify-between
       items-center w-full text-center'>     
        <div className='mb-9'>
        <img className='md:h-[450px]' src={logoHeroWEBPGrande} alt="logoHero" />
        </div>
      </div>
      
    </div>



  </section>
)


export default Hero