import React, { useContext, useState } from 'react'
import { ModalContex } from '../../contexts/ModalContex'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignInForm = () => {//Formulario que sirve para simular el acceso a una cuenta dentro de la tienda.
    const modalCtx = useContext(ModalContex)
    const [successfulForm, SetSuccesssfulForm] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    email: ''
                }}
                validate={(myValues) => {
                    let customErrors = {};

                    if (!myValues.email) {

                        customErrors.email = 'Por favor escriba su correo electrónico.'
                    } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(myValues.email)) {

                        customErrors.email = 'Formato de correo inválido.'
                    }
                    if (!myValues.password) {

                        customErrors.password = 'Campo obligatorio.'
                    } else if (myValues.password != 12345) {
                        customErrors.password = 'Contraseña incorrecta.'
                    }
                    return customErrors
                }
                }
                onSubmit={(myValues, { resetForm }) => {

                    resetForm();
                    console.log(myValues)
                    console.log('formulario enviado')
                    SetSuccesssfulForm(true)
                    setTimeout(() => { SetSuccesssfulForm(false); modalCtx.closeModal() }, 2000)
                    console.log('datos verificados')

                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <Field name='email' type="text" placeholder="email@ejemplo.com" className="input input-bordered" />
                            <ErrorMessage name='email' component={() => (<div style={{ 'color': 'red' }}>{errors.email}</div>)} />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Contraseña</span>
                            </label>
                            <Field name='password' type="password" placeholder="12345" className="input input-bordered" />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Olvidé mi contraseña</a>
                            </label>
                            <ErrorMessage name='password' component={() => (<div style={{ 'color': 'red' }}>{errors.password}</div>)} />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary" >Iniciar sesión</button>
                        </div>
                        {successfulForm && <div style={{ 'color': 'green' }} >Has iniciado sesión correctamente!</div>}
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default SignInForm