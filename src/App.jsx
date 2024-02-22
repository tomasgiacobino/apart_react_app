import styles from './style'
import { Navbar, Hero, Apart, Apart1, Apart2, Apart3, Apart4, Footer } from './components';

import {apartamentos} from "./constants/index.js";

const App = () => {
  return(
<div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
  
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
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
          {/* <Apart1/>
          <Apart2/>
          <Apart3/>
          <Apart4/> */}
          <Footer/>
        </div>
      </div>

    </div>
)};
  
  export default App