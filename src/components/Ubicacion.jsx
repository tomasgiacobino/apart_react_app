import styles from '../style';

const Ubicacion = () => {
    return (
        <section id='ubicacion' className={`flex
                flex-col text-center ${styles.paddingY} bg-[#33160C] h-500 text-white font-poppins`}>

            <h2 className='font-semibold text-[40px] pb-8' >UBICACIÓN</h2>

            <div className={`flex-1 ${styles.flexStart}
                    md:flex-row flex-col justify-around items-center text-center `}>

                <div className="md:w-[40%] w-[100%] md:m md:h-[300px] h-[200px]">
                    <div className="w-[100%] h-[100%]">
                        <iframe className="w-[100%] h-[100%] border-solid border-2 rounded-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843.578345941893!2d-65.40601436923932!3d-24.788568054250007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bd4bc6b6eb%3A0x6d72340b1e7ba947!2sVicente%20L%C3%B3pez%2C%20Salta!5e0!3m2!1ses!2sar!4v1707858712428!5m2!1ses!2sar"></iframe>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h3>Descripcion</h3>
                    <p>/</p>
                    <h4>Ubicacion</h4>
                </div>

            </div>
        </section>
    )
}

export default Ubicacion