import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ModalContex } from '../contexts/ModalContex'

export default function AccountModal() {//Modal con formularios, se han combinado elementos de HeadlessUI y DaisyUI con mucho código condicional y el uso de context.
    const modalCtx = useContext(ModalContex)

    return (
        <>
            <Transition appear show={modalCtx.modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={modalCtx.closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Registrarse
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-lg ">
                                        <div className="tabs">
                                            <a className={modalCtx.formActive ? "tab tab-lifted tab-active" : "tab tab-lifted"} onClick={() => modalCtx.swapSignIn()}>Iniciar sesión</a>
                                            <a className={modalCtx.formActive ? "tab tab-lifted" : "tab tab-lifted tab-active"} onClick={() => modalCtx.swapSignUp()}>Crear cuenta</a>
                                        </div>

                                        <div className="card-body border-x-[#cfcfcf] rounded-b-lg border-b-[#cfcfcf] border-solid">
                                            {modalCtx.formActive ?
                                                <div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="text" placeholder="email@ejemplo.com" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Contraseña</span>
                                                        </label>
                                                        <input type="text" placeholder="12345" className="input input-bordered" />
                                                        <label className="label">
                                                            <a href="#" className="label-text-alt link link-hover">Olvidé mi contraseña</a>
                                                        </label>
                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <button className="btn btn-primary" onClick={() => { modalCtx.closeModal(); console.log('datos verificados') }}>Iniciar sesión</button>
                                                    </div>
                                                </div>
                                                : <div>
                                                    <ul className="steps">
                                                        <li className="step step-primary">Nombre</li>
                                                        <li className="step step-primary">Email</li>
                                                        <li className="step">Contraseña</li>
                                                        <li className="step">Confirmar</li>
                                                    </ul>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="text" placeholder="email" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Repite email</span>
                                                        </label>
                                                        <input type="text" placeholder="email" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Contraseña</span>
                                                        </label>
                                                        <input type="text" placeholder="password" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Repite contraseña</span>
                                                        </label>
                                                        <input type="text" placeholder="password" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <button className="btn btn-primary" onClick={() => { modalCtx.closeModal(); console.log('cuenta creada') }}>Crear cuenta</button>
                                                    </div>
                                                </div>}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
