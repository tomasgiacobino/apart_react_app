import React, { useEffect } from "react";
import "./Modal.css";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"



const Modal = ({ isOpen, onClose, photosModal, titleModal }) => {


    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen) {
            body.classList.add("active-modal");
        } else {
            body.classList.remove("active-modal");
        }

        return () => {
            body.classList.remove("active-modal");
        };
    }, [isOpen]);

    const modalClassName = isOpen ? "modal" : "modal";

    return (
        <>
            {isOpen && (
                <div className={modalClassName}>
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <div className="text-white font-poppins md:text-[40px] text-[25px] pb-5">
                            {titleModal}
                        </div>
                        <div className="galleryImages">
                            <ImageGallery items={photosModal} />
                        </div>
                        <button
                            className="close-modal text-white bg-verMas-gradient border-solid border-2 p-4 rounded-[12px]"
                            onClick={onClose}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z" fill="#FFFFFF" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;



// import camasofa1 from "../assets/cuarto1/camasofa1.webp";
// import cama2 from "../assets/cuarto1/cama2.webp";
// import detalle from "../assets/cuarto1/detalle.webp";
// import detalle1 from "../assets/cuarto1/detalle1.webp";
// import lampara from "../assets/cuarto1/lampara.webp";
// import florero from "../assets/cuarto1/florero.webp";
// import bañolejos from "../assets/cuarto1/bañolejos.webp";
// import baño from "../assets/cuarto1/baño.webp";
// import baño1 from "../assets/cuarto1/baño1.webp";
// import baño2 from "../assets/cuarto1/baño2.webp";

// const photos = [
//     {
//         original: camasofa1,
//         thumbnail: camasofa1,
//     },
//     {
//         original: cama2,
//         thumbnail: cama2,
//     },
//     {
//         original: detalle,
//         thumbnail: detalle,
//     },
//     {
//         original: detalle1,
//         thumbnail: detalle1,
//     },
//     {
//         original: lampara,
//         thumbnail: lampara,
//     },
//     {
//         original: florero,
//         thumbnail: florero,
//     },
//     {
//         original: bañolejos,
//         thumbnail: bañolejos,
//     },
//     {
//         original: baño,
//         thumbnail: baño,
//     },
//     {
//         original: baño1,
//         thumbnail: baño1,
//     },
//     {
//         original: baño2,
//         thumbnail: baño2,
//     },
// ];