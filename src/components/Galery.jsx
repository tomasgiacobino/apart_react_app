// import { useState } from 'react';
import { imgGaleria } from '../constants';
import "./galery.css";

const Galery = () => {

  // const [model, setModel] = useState(false);
  // const [tempImg, setTempImg] = useState('');
  // const getImg = (img) => {
  //     setTempImg(img);
  //     setModel(true);
  // }

  return (
    <section id="galeria" className="">

      <div className='flex flex-col items-center justify-center'>
            <h3 className='md:text-[35px] text-[25px] md:mt-12 mt-20 text-[#8B5E3B]'>Galeria de Imagenes</h3>
      {/* <div className={model ? "model open" : "model"}>
          <img src={tempImg} alt="" />
      </div> */}
            <div className='gallery'>
              {imgGaleria.map((item, index) => {
                return(
                  <div 
                  key={index}
                  className='photos md:transform md:hover:scale-105 md:transition md:duration-300'>
                      <img className='photo' src={item.img} alt={item.alt} />
                  </div>
                )
              })}

            </div>
      </div>



    </section>
  )
}

export default Galery