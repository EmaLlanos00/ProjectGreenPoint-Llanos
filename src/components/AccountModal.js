import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ModalContex } from '../contexts/ModalContex'
import SignInForm from './forms/SignIn'
import SignUp from './forms/SignUp'
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

                                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 rounded-lg mt-3">
                                        <div className="tabs">
                                            <a className={modalCtx.formActive ? "tab tab-lifted tab-active" : "tab tab-lifted"} onClick={() => modalCtx.swapSignIn()}>Iniciar sesión</a>
                                            <a className={modalCtx.formActive ? "tab tab-lifted" : "tab tab-lifted tab-active"} onClick={() => modalCtx.swapSignUp()}>Crear cuenta</a>
                                        </div>
                                        {!modalCtx.formActive && <ul className="steps hidden xs:inline-grid">
                                            <li className="step step-primary">Nombre</li>
                                            <li className={modalCtx.formStep > 1 ? 'step step-primary' : 'step'}>Email</li>
                                            <li className={modalCtx.formStep > 2 ? 'step step-primary' : 'step'}>Contraseña</li>
                                            <li className={modalCtx.formStep > 3 ? 'step step-primary' : 'step'}>Confirmar</li>
                                            <li data-content="✓" className={modalCtx.formStep > 4 ? 'step step-primary' : 'step'}></li>
                                        </ul>
                                        }
                                        <div className="card-body border-x-[#cfcfcf] rounded-b-lg border-b-[#cfcfcf] border-solid p-0">
                                            {modalCtx.formActive ? <SignInForm /> : <SignUp />}
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
