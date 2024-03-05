import styles from '../style';

const Ub = () => {
    return (
        <section id='ubicacion' className={`flex
                flex-col text-center ${styles.paddingY} bg-[#33160C] h-500 text-white font-primary`}>

            <h2 className='font-semilight text-[40px] pb-8' >UBICACIÓN</h2>

            <div className={`flex-1 ${styles.flexStart}
                    md:flex-row flex-col justify-around items-center text-center `}>

                <div className="md:w-[50%] w-[100%] md:h-[300px] h-[250px] ss:w-[60%]">
                    <div className="w-[100%] h-[100%]">
                        <iframe className="w-[100%] h-[100%] border-solid border-2 rounded-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843.578345941893!2d-65.40601436923932!3d-24.788568054250007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bd4bc6b6eb%3A0x6d72340b1e7ba947!2sVicente%20L%C3%B3pez%2C%20Salta!5e0!3m2!1ses!2sar!4v1707858712428!5m2!1ses!2sar"></iframe>
                    </div>
                </div>

                <div className='flex flex-col font-light max-w-[40%] justify-center ssxs:mt-12 md:py-10 md:px-14 gap-y-14 md:border-y-2 md:border-white'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p>/</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae ex expedita</h4>
                </div>

            </div>
        </section>
    )
}

export default Ub