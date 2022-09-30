import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrum from './Breadcrum';

const ContactPage = () => {//Formulario de contacto que utiliza la api de EmailJS para funcionar. Tiene un toast para proporcionar alertas atractivas para el usuario.

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wgzoscw', 'template_n9u0txd', form.current, 'pAzh-rv7THJ3HuKp4')
            .then((result) => {
                console.log(result.text);
                toast('Perfecto, se ha enviado tu consulta. Muchas gracias.');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Breadcrum />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/51/15/15/1000_F_251151517_fQuM7JOHtlXKWVG27FWm0vVu0HkeCNbi.jpg")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:align-top">
                    <div className="lg:w-3/6 flex flex-col justify-center">
                        <div className='bg-base-200/60 rounded-xl border-white p-3  break-all xs:break-normal'>
                            <h1 className="text-3xl sm:text-5xl font-bold">Contactanos</h1>
                            <p className=" text-sm sm:text-base py-6">Estamos ansiosos por saber lo que pensás de nuestro emprendimiento. Podés enviarnos cualquier consulta, queja o sugerencia a través de este formulario.</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 min-w-0">
                        <div className="card-body">
                            <form ref={form} onSubmit={sendEmail} className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="alguien@example.com" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text">Nombre</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Nombre" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label>Comentario</label>
                                <textarea className="textarea textarea-primary w-full max-w-xs" name="message" placeholder="mensaje..." cols={45} rows={8}></textarea>
                                <input className="btn btn-primary mt-2" type="submit" value="Enviar" />
                            </form>

                        </div>
                    </div>
                </div>
                <ToastContainer
                    toastStyle={{ backgroundColor: '#3ABFF8', color: 'black' }}
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
                {/* <div>
            <div className="bg-indigo-600">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-indigo-800 p-2">
                                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span className="md:hidden">We announced a new product!</span>
                                <span className="hidden md:inline">Big news! This gotta be an almost full functional contact form soon!</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                            >
                                Learn more
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full m-3'>
                <div className='w-6/12 flex flex-col gap-8 border-solid border-2 border-indigo-600 p-3 rounded-md'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input type="text" placeholder="write down your name here" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div>
                    <p> Please leave a comment </p>
                    <textarea className="textarea textarea-primary" placeholder="write your comment here!" cols="40"></textarea>
                    </div>
                </div>
            </div>
        </div> */}
            </div>
        </>

    )
}
export default ContactPage          