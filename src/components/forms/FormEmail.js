import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import { ModalContex } from '../../contexts/ModalContex';


const FormEmail = () => {//Parte 2 de formularios, agregando mail e info relevante.
    const modalCtx = useContext(ModalContex)

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    address: '',
                    userLocation: 'CABA'
                }}
                validate={myValues => {

                    let customErrors = {};

                    if (!myValues.email) {

                        customErrors.email = 'Por favor escriba su correo electrónico.'
                    } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(myValues.email)) {

                        customErrors.email = 'Formato de correo inválido.'
                    }

                    if (!myValues.address) {
                        customErrors.address = 'Proporcione una dirección.'
                    }

                    return customErrors

                }}
                onSubmit={(myValues, { resetForm }) => {
                    console.log('formulario 2 enviado')
                    sessionStorage.setItem('formEmailValues', JSON.stringify(myValues))
                    resetForm();
                    modalCtx.changeSignUpForm(3)

                }}
            >
                {({ errors }) => (
                    <>
                        <Form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <Field type="email" placeholder="ej: email@example.com" className="input input-primary" name="email" />
                                <ErrorMessage name="email" component={() => (<div style={{ 'color': 'red' }}>{errors.email}</div>)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Localidad</span>
                                </label>
                                <Field className="select select-primary w-full max-w-xs mr-auto" name="userLocation" as="select">
                                    <option value="CABA">CABA</option>
                                    <option value="AMBA">AMBA</option>
                                    <option value="Interior">Interior</option>
                                    <option value="Exterior (internacional)">Exterior (internacional)</option>
                                </Field>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Dirección</span>
                                </label>
                                <Field type="text" placeholder="ej: Calle Falsa 123" className="input input-primary" name="address" />
                                <ErrorMessage name="address" component={() => (<div style={{ 'color': 'red' }}>{errors.address}</div>)} />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Siguiente</button>
                            </div>

                        </Form>
                    </>

                )}
            </Formik>
        </>
    )
}

export default FormEmail