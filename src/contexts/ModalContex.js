import { createContext, useState } from "react";

export const ModalContex = createContext()


const ModalContexProvider = ({ children }) => {//Este context sirve para mostrar el modal de inicio de sesión desde el navbar. 
    //Me pareció la manera más lógica de llamar a algo en todo el proyecto constantemente.

    const [modal, setModal] = useState(false);
    const [formActive, setFormActive] = useState(true);
    const [formStep, setFormStep] = useState(1);

    function closeModal() {
        setModal(false)
    }

    function openModal() {
        setModal(true)
    }

    function swapSignIn() {

        setFormActive(true)
    }

    function swapSignUp() {

        setFormActive(false)
    }
    function changeSignUpForm(number) {
        setFormStep(number);
    }

    return (
        <ModalContex.Provider value={{ modal, closeModal, openModal, formActive, swapSignIn, swapSignUp, formStep, changeSignUpForm }}>{children}</ModalContex.Provider>
    )
}

export default ModalContexProvider