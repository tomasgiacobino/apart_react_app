import styles from './style'
import { Navbar, Hero, Apart, Ub , Footer } from './components';

import { apartamentos } from "./constants/index.js";
import { useState, useEffect } from 'react';
import PuffLoader from "react-spinners/PuffLoader.js";

const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <div>

      {loading ?
        
        <div className=' w-full bg-[#D6D6D6] h-[100vh] flex justify-center items-center text-center'>
          <PuffLoader
            color={'#de8c2e'}
            loading={loading}
            size={100}
          />

        </div>

        :
        <div className="bg-[#D6D6D6] w-full overflow-hidden">



          <div className={`${styles.paddingX} ${styles.flexCenter}` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              {apartamentos.map(apartamento => (
                <Apart
                  key={apartamento.id}
                  id={apartamento.id}
                  descripcion={apartamento.desc}
                  p1={apartamento.photos.p1}
                  p2={apartamento.photos.p2}
                  linkAirbnb={apartamento.linkAirbnb}
                  linkBooking={apartamento.linkBooking}
                  linkWpp={apartamento.linkWpp}
                  photosModal={apartamento.photosModal}
                  titleModal={apartamento.titleModal}
                />
              ))}
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexCenter}  bg-[#33160C]` }>
            <div className={`${styles.boxWidth}`}>
            <Ub/>
            </div>
          </div>

          <div className={`${styles.paddingX} ${styles.flexCenter}`  }>
            <div className={`${styles.boxWidth}`}>
            <Footer/>
            </div>
          </div>

        </div>
      }

    </div>

  )
};

export default App