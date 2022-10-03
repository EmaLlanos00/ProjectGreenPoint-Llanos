import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { ModalContex } from '../../contexts/ModalContex';


const FormCheck = () => {//Parte 4 de formularios. EL usuario verificará si los datos le parecen correctos y finalizará el modal, o se reinician los formularios.
    const modalCtx = useContext(ModalContex)
    const [successForm, SetSuccessForm] = useState(false)
    const [changeData, setChangeData] = useState(false);
    const nameData = JSON.parse(localStorage.getItem('formNameValues'))
    const emailData = JSON.parse(localStorage.getItem('formEmailValues'))


    return (
        <>
            <Formik
                initialValues={{

                    checking: 'yes'

                }}
                validate={myValues => {

                    let customErrors = {};

                    return customErrors

                }}
                onSubmit={(myValues, { resetForm }) => {
                    console.log('formulario 4 enviado')
                    resetForm();
                    modalCtx.changeSignUpForm(5)
                    SetSuccessForm(true)
                    setTimeout(() => { SetSuccessForm(false); modalCtx.closeModal() }, 2000)
                }}
            >
                {({ errors }) => (
                    <>
                        <Form>
                            <div>
                                <label className="label">
                                    <span >Email:</span>
                                    <span >{emailData.email}</span>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span >Nombre:</span>
                                    <span >{nameData.user} {nameData.lastName}</span>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span >Teléfono:</span>
                                    <span >{nameData.phone}</span>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span >Localidad:</span>
                                    <span >{emailData.userLocation}</span>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span >Dirección:</span>
                                    <span >{emailData.address}</span>
                                </label>
                            </div>
                            <div>
                                <label className='label'>
                                    <span className='text-lg font-medium'>Verifica tus datos</span>
                                </label>
                                <label className='mr-12'>
                                    <Field className="radio-primary radio-xs" type="radio" name="checking" value="yes" onClick={() => setChangeData(false)} />
                                    <span className='label-text ml-3'>Todo bien</span>
                                </label>
                                <label>
                                    <Field className="radio-primary radio-xs" type="radio" name="checking" value="no" onClick={() => setChangeData(true)} />
                                    <span className='label-text ml-3' >Quiero cambiar mis datos</span>
                                </label>
                            </div>

                            {changeData ? <div className="form-control mt-6">
                                <button type="submit" className="btn btn-info" onClick={() => modalCtx.changeSignUpForm(1)}>Modificar datos</button>
                            </div>
                                : <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Crear cuenta</button>
                                </div>}
                            {successForm && <div style={{ 'color': 'green' }} >Registro completo, gracias por formar parte de GreenPoint!!</div>}

                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}

export default FormCheck