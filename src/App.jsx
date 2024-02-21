import styles from './style'
import { Navbar, Hero, Apart1, Apart2, Apart3, Apart4, Footer } from './components';


const App = () => ( 
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
          <Apart1/>
          <Apart2/>
          <Apart3/>
          <Apart4/>
          <Footer/>
        </div>
      </div>

    </div>
);
  
  export default App