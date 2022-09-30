import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrum from './Breadcrum'

const Locations = () => {//Componente sencillo que muestra un header con un mapa, hace ver al trabajo ligeramente más completo.
    return (
        <>
            <Breadcrum />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/51/15/15/1000_F_251151517_fQuM7JOHtlXKWVG27FWm0vVu0HkeCNbi.jpg")` }}>
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="flex flex-col-reverse lg:flex-row justify-between align-middle gap-4">
                        <div src="https://placeimg.com/260/400/arch" className=" lg:w-3/6">
                            <iframe className=" rounded-lg shadow-2xl  w-full h-[75vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.348130652177!2d-58.433267586268535!3d-34.61819098322197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca440ec19097%3A0x30b34282ae8fae18!2sParque%20Rivadavia!5e0!3m2!1ses!2sar!4v1663976587458!5m2!1ses!2sar" /* width="500" height="800" */ style={{ border: "0", margin: "auto" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="lg:w-3/6 flex flex-col justify-center">
                            <div className='bg-base-200/60 rounded-xl border-white p-3  break-all xs:break-normal'>
                                <h1 className="text-3xl sm:text-5xl font-bold">Encontranos en Pque. Rivadavia!</h1>
                                <p className=" text-sm sm:text-base py-6">Tenemos un local con atención al público. También podés retirar tu compra allí sin problema.</p>
                                <Link to={'/'}><div className='flex justify-center'><button className="btn btn-primary w-9/12 overflow-hidden">Comprar algo</button></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locations