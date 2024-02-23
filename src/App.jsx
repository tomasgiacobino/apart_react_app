import styles from './style'
import { Navbar, Hero, Apart, Apart1, Apart2, Apart3, Apart4, Footer } from './components';

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
        
        <div className=' w-full bg-primary h-[100vh] flex justify-center items-center text-center'>
          <PuffLoader
            color={'#de8c2e'}
            loading={loading}
            size={100}
          />

        </div>

        :
        <div className="bg-primary w-full overflow-hidden">



          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
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
              <Footer />
            </div>
          </div>
        </div>
      }

    </div>

  )
};

export default App