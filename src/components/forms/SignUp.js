import React, { useContext } from 'react'
import FormName from './FormName'
import FormEmail from './FormEmail'
import FormPassword from './FormPassword'
import SignUpStep4 from './FormCheck'
import { ModalContex } from '../../contexts/ModalContex'
const SignUp = () => {//Componente que gestiona los formularios que se muestran conforme se complenten los datos al crear una cuenta.
    const modalCtx = useContext(ModalContex)
    console.log(modalCtx.formStep)
    return (
        <>
            {modalCtx.formStep === 1 && <FormName />}
            {modalCtx.formStep === 2 && <FormEmail />}
            {modalCtx.formStep === 3 && <FormPassword />}
            {modalCtx.formStep >= 4 && <SignUpStep4 />}
        </>
    )
}

export default SignUp