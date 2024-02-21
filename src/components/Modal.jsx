import React, { useEffect } from "react";
import "./Modal.css";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"



const Modal = ({ isOpen, onClose, photos, title }) => {


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
                        <div className="text-white font-poppins text-[40px] pb-5">
                            {title}
                        </div>
                        <div className="galleryImages">
                            <ImageGallery items={photos} />
                        </div>
                        <button
                            className="close-modal text-white bg-verMas-gradient border-solid border-2 rounded-[12px]"
                            onClick={onClose}
                        >
                            X
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