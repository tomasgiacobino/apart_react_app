/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style";
import "./apart.css";
import { Fade } from "react-awesome-reveal";
// Import Swiper styles
import { Navigation, Pagination, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


const Apart = ({
  descripcion,
  p1,
  p2,
  p3,
  titleModal,
  linkAirbnb,
  linkBooking,
  linkWpp,
}) => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

  return (
    <section
      id="apart1"
      className={`flex flex-col md:mt-14 mt-5 ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col items-center w-full text-center justify-between xl:px-0 sm:px-16 px-6`}
        style={{ paddingLeft: 0, marginLeft: 0, overflow: "auto" }}
      >

          <div id="nombreApartMobile" className="md:hidden block mb-6 font-light text-[35px]">
            {titleModal}
          </div>
        <div className="swipert">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            slidesOffsetBefore={0}
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="image__wrapper">
                <img src={p1} alt="Imagen 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image__wrapper">
                <img src={p2} alt="Imagen 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image__wrapper">
                <img src={p3} alt="Imagen 3" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div id="descMobile" className="md:hidden font-light block text-[18px] mt-6 border-solid border-1 rounded-[10px] p-3 bg_descriptionMobile ">
            <div className=""> {descripcion}</div>
          </div>

          <div id="descNoMobile" className="description font-light mt-28 mr-12 text-center top-0 right-0 z-[1] md:block hidden">
            <h2
              className="flex md:flex-row flex-col 
                        font-primary font-light 
                        text-[40px]
                       text-[#33160C] justify-center items-center"
            >
              {titleModal}
            </h2>
            <Fade>
              <div className="font-light text-[20px] text-[#33160C]">{descripcion}</div>
            </Fade>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[#33160C]">

          <p className="pb-2 font-primary font-light md:text-[34px] text-[22px] pt-12">Consultá disponibilidad para tus reservas:</p>

          <div className="flex md:flex-row flex-col md:mt-8 mt-0 md:mb-8  md:gap-0 gap-8 w-full justify-around items-center md:text-[30px] text-[20px]">


            <div className="transform hover:scale-75 transition duration-300 md:w-36 w-28 md:h-20 h-14">
              <a target="_blank" href={linkAirbnb}>
                <button className= "bg-black text-white font-extralight w-full h-full border-slate-950 border-solid border-4 rounded-[25px] hover:bg-black hover:text-white hover:border-slate-50">
                   Airbnb
                </button>
              </a>
            </div>

            <div className="transform hover:scale-75 transition duration-300 md:w-36 w-28 md:h-20 h-14">
              <a target="_blank" href={linkBooking}>
                <button className="md:w-36 w-28 md:h-20 h-14 text-black font-extralight border-slate-950 border-solid border-4 rounded-[25px] p-3" >Booking</button>
              </a>
            </div>

            <a target="_blank" href={linkWpp}>
              <button className="md:w-36 w-28 md:h-20 h-14  text-black font-extralight border-solid border-4 rounded-[12px] p-3" >Whatsapp</button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Apart;
