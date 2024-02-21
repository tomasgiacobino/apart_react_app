import styles from '../style';
import {logoHeroSolo} from '../assets';


const Hero = () => (


  <section id='home' className={`flex
  flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6 `}>

      <div className='flex flex-col justify-between
       items-center w-full text-center'>
        <h1 className='flex md:flex-row flex-col font-poppins 
          font-semibold ss:text-[68px] text-[42px] text-white
          gap-4'>
          Terra <br className='sm:block hidden' /> {" "}
          <span
            className='text-gradient'>María
          </span> {" "}
          Apartments
        </h1>

        <div className='flex md:flex-row flex-col items-center gap-5 pt-10 w-[80%]'>
          <div className='flex flex-col items-center'>
            <h3 className={`${styles.paragraph} mt-5`} >En Terra Maria Apart contamos con 4 aparts para que alojarte en la ciudad de salta, cada uno tiene sus propias caracteristicas.</h3>
            <div className='flex md:flex-row flex-wrap justify-center gap-20 mt-10'>

              {/* icono casa */}
              <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="House-2--Streamline-Ultimate" >
                <path d="m23.71 11.29 -11 -11a1 1 0 0 0 -1.42 0l-11 11a1 1 0 0 0 -0.21 1.09A1 1 0 0 0 1 13h1.25a0.25 0.25 0 0 1 0.25 
              0.25V23a1 1 0 0 0 1 1h5.75a0.25 0.25 0 0 0 0.25 -0.25V19a2.5 2.5 0 0 1 5 0v4.75a0.25 0.25 0 0 0 0.25 0.25h5.75a1 1 0 0 0 1 
              -1v-9.75a0.25 0.25 0 0 1 0.25 -0.25H23a1 1 0 0 0 0.92 -0.62 1 1 0 0 0 -0.21 -1.09Z"
                  fill="#bb9227" strokeWidth={1} /></svg>
              {/* icono wifi */}
              <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Wifi-Check--Streamline-Ultimate" >
                <g id="Wifi-Check--Streamline-Ultimate">
                  <path d="M17.56 11a6.37 6.37 0 1 0 6.37 6.37A6.38 6.38 0 0 0 17.56 11Zm3.21 5.11 -2.84 3.79a1.48 1.48 0 0 1 
                  -2.23 0.16l-1.47 -1.47a0.75 0.75 0 1 1 1.06 -1.06l1.26 1.26a0.32 0.32 0 0 0 0.2 0.08 0.29 0.29 0 0 0 0.18 
                  -0.1l2.64 -3.56a0.75 0.75 0 1 1 1.2 0.9Z" fill="#bb9227" strokeWidth={1} />
                  <path d="M15.22 8.66a1 1 0 1 0 1.41 -1.42 9.77 9.77 0 0 0 -13.79 0 1 1 0 0 0 1.42 1.42 7.76 7.76 0 0 1 10.96 0Z" fill="#bb9227"
                    strokeWidth={1} /><path d="M17.69 5.53a1 1 0 0 0 0.71 0.29 1 1 0 0 0 0.7 -0.29 1 1 0 0 0 0 -1.41 13.25 13.25 0 0 0 -18.73 0 1 1 0 0 0 1.41 1.41
                   11.27 11.27 0 0 1 15.91 0Z" fill="#bb9227" strokeWidth={1} /><path d="M13.5 11a1 1 0 0 0 0.15 -0.45 1 1 0 0 0 -0.42 -0.94 6.27
                    6.27 0 0 0 -7.91 0.77 1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0 4.27 4.27 0 0 1 5.38 -0.52 1.06 1.06 0 0 0 0.33 0.14A1 1 0 0 0 13.5
                     11Z" fill="#bb9227" strokeWidth={1} /></g></svg>

              {/* icono tv */}
              <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Tv-Flat-Screen--Streamline-Ultimate" >
                <path d="M22.5 1.5h-21A1.5 1.5 0 0 0 0 3v13.5A1.5 1.5 0 0 0 1.5 18h8.75a0.25 0.25 0 0 1 0.25 0.25v2a0.25 0.25 0 0 1 -0.25 0.25H7a1 
                1 0 0 0 0 2h10a1 1 0 0 0 0 -2h-3.25a0.25 0.25 0 0 1 -0.25 -0.25v-2a0.25 0.25 0 0 1 0.25 -0.25h8.75a1.5 1.5 0 0 0 1.5 -1.5V3a1.5 1.5 0 0 0 
                -1.5 -1.5Zm-1.5 14H3a0.5 0.5 0 0 1 -0.5 -0.5V4.5A0.5 0.5 0 0 1 3 4h18a0.5 0.5 0 0 1 0.5 0.5V15a0.5 0.5 0 0 1 -0.5 0.5Z" fill="#bb9227" strokeWidth={1} /></svg>

              {/* icono aire */}
              <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Temperature-Snowflake-1--Streamline-Ultimate" >
                <path d="M24 12a1 1 0 0 0 -1 -1h-2a0.25 0.25 0 0 1 -0.23 -0.15 0.26 0.26 0 0 1 0.05 -0.28l1.37 -1.36a1 1 0 1 0 -1.42 -1.42l-2.91 2.92a1
                 1 0 0 1 -0.71 0.29h-0.4a0.5 0.5 0 0 1 -0.48 -0.35 4.66 4.66 0 0 0 -0.3 -0.73 0.5 0.5 0 0 1 0.09 -0.59l4.76 -4.75a1 1 0 1 0 -1.42 -1.42l-4.73 
                 4.76a0.5 0.5 0 0 1 -0.59 0.09 4.66 4.66 0 0 0 -0.73 -0.3 0.5 0.5 0 0 1 -0.35 -0.48v-0.4a1 1 0 0 1 0.29 -0.71l2.92 -2.91a1 1 0 1 0 -1.42 -1.42l-1.36 
                 1.37a0.26 0.26 0 0 1 -0.28 0A0.25 0.25 0 0 1 13 3V1a1 1 0 0 0 -2 0v2a0.25 0.25 0 0 1 -0.15 0.23 0.26 0.26 0 0 1 -0.28 0L9.21 1.79a1 1 0 1 0 -1.42 1.42l2.92 2.91a1 
                 1 0 0 1 0.29 0.71v0.4a0.5 0.5 0 0 1 -0.35 0.48 4.66 4.66 0 0 0 -0.73 0.3 0.5 0.5 0 0 1 -0.59 -0.09L4.58 3.16a1 1 0 0 0 -1.42 1.42l4.76 4.75a0.5 0.5 0 0 1 0.08 0.59 4.66 
                 4.66 0 0 0 -0.3 0.73 0.5 0.5 0 0 1 -0.48 0.35h-0.4a1 1 0 0 1 -0.71 -0.29l-2.9 -2.92a1 1 0 1 0 -1.42 1.42l1.37 1.36a0.26 0.26 0 0 1 0 0.28A0.25 0.25 0 0 1 3 11H1a1 1 0 0 0 0 
                 2h2a0.25 0.25 0 0 1 0.23 0.15 0.26 0.26 0 0 1 0 0.28l-1.44 1.36a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.91 -2.92a1 1 0 0 1 0.71 -0.29h0.4a0.5 0.5 0 0 1 0.48 0.35 4.66 4.66 0 0 0 
                 0.3 0.73 0.5 0.5 0 0 1 -0.09 0.59l-4.76 4.75a1 1 0 0 0 0 1.42 1 1 0 0 0 0.71 0.29 1 1 0 0 0 0.71 -0.29l4.75 -4.76a0.5 0.5 0 0 1 0.59 -0.08 4.66 4.66 0 0 0 0.73 0.3 0.5 0.5 0 
                 0 1 0.35 0.48v0.4a1 1 0 0 1 -0.29 0.71l-2.92 2.9a1 1 0 1 0 1.42 1.42l1.36 -1.37a0.26 0.26 0 0 1 0.28 -0.05 0.25 0.25 0 0 1 0.15 0.21v2a1 1 0 0 0 2 0v-2a0.25 0.25 0 0 1 0.15 
                 -0.23 0.26 0.26 0 0 1 0.28 0.05l1.36 1.37a1 1 0 0 0 1.42 0 1 1 0 0 0 0 -1.42l-2.92 -2.91a1 1 0 0 1 -0.29 -0.71v-0.4a0.5 0.5 0 0 1 0.35 -0.48 4.66 4.66 0 0 0 0.73 -0.3 0.5 0.5 
                 0 0 1 0.59 0.09l4.75 4.76a1 1 0 0 0 0.71 0.29 1 1 0 0 0 0.71 -0.29 1 1 0 0 0 0 -1.42l-4.76 -4.75a0.5 0.5 0 0 1 -0.09 -0.59 4.66 4.66 0 0 0 0.3 -0.73 0.5 0.5 0 0 1 0.48 
                 -0.35h0.4a1 1 0 0 1 0.71 0.29l2.91 2.92a1 1 0 0 0 1.42 0 1 1 0 0 0 0 -1.42l-1.37 -1.36a0.26 0.26 0 0 1 -0.05 -0.28A0.25 0.25 0 0 1 21 13h2a1 1 0 0 0 1 -1Zm-12 2.5a2.5 2.5 0 
                 1 1 2.5 -2.5 2.5 2.5 0 0 1 -2.5 2.5Z" fill="#bb9227" strokeWidth={1} /></svg>

                 {/* icono cama */}
                 <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Hotel-Double-Bed-2--Streamline-Ultimate" >
                  <g id="Hotel-Double-Bed-2--Streamline-Ultimate"><path d="M23.23 15.5a0.53 0.53 0 0 0 0.38 -0.18 0.56 0.56 0 0 0 0.11 -0.41l-1.49 
                  -8a0.5 0.5 0 0 0 -0.49 -0.41H2.26a0.5 0.5 0 0 0 -0.49 0.41l-1.49 8a0.56 0.56 0 0 0 0.11 0.41 0.53 0.53 0 0 0 0.38 0.18Z" fill="#bb9227" 
                  strokeWidth={1} /><path d="M0.5 16.5a0.5 0.5 0 0 0 -0.5 0.5v3.25a2.25 2.25 0 0 0 2.25 2.25 0.25 0.25 0 0 1 0.25 0.25v0.5a0.75 0.75 0 0 0 
                  1.5 0V23a0.5 0.5 0 0 1 0.5 -0.5h15a0.5 0.5 0 0 1 0.5 0.5v0.25a0.75 0.75 0 0 0 1.5 0v-0.5a0.25 0.25 0 0 1 0.25 -0.25A2.25 2.25 0 0 0 24 20.25V17a0.5 0.5 
                  0 0 0 -0.5 -0.5Z" fill="#bb9227" strokeWidth={1} /><path d="M22 2.25A2.25 2.25 0 0 0 19.75 0H4.25A2.25 2.25 0 0 0 2 2.25V5a0.5 0.5 0 0 0 0.5 0.5h1.58a0.5 
                  0.5 0 0 0 0.49 -0.42l0.36 -2.16a0.5 0.5 0 0 1 0.49 -0.42H10a0.5 0.5 0 0 1 0.5 0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5 -0.5V3a0.5 0.5 0 0 1 0.5 
                  -0.5h4.58a0.5 0.5 0 0 1 0.49 0.42l0.36 2.16a0.5 0.5 0 0 0 0.49 0.42h1.58A0.5 0.5 0 0 0 22 5Z" fill="#bb9227" strokeWidth={1} /></g></svg>
            </div>
          </div>

          <div className='logoHero'>
              <img className='md:h-[200px] h-[200px] md:w-[250px] w-[200px] ssxs:mt-10 mt-0' src={logoHeroSolo} alt="logoTerraMaria" />
          </div>

        </div>

      </div>
      
    </div>



  </section>
)


export default Hero