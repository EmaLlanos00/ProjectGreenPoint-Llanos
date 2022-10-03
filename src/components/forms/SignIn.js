import React, { useContext, useState } from 'react'
import { ModalContex } from '../../contexts/ModalContex'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignInForm = () => {//Formulario que sirve para simular el acceso a una cuenta dentro de la tienda.
    const modalCtx = useContext(ModalContex)
    const [successfulForm, SetSuccesssfulForm] = useState(false);
    const defaultValues = {
        user: 'Invitado',
        lastName: '',
        phone: ''
    }
    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    email: ''
                }}
                validate={(myValues) => {

                    let customErrors = {};

                    let passToVerify = (JSON.parse(localStorage.getItem('formPasswordValues'))?.password) ?? 12345
                    let emailToVerify = (JSON.parse(localStorage.getItem('formEmailValues'))?.email) ?? 'email@ejemplo.com'


                    if (!myValues.email) {

                        customErrors.email = 'Por favor escriba su correo electrónico.'
                    } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(myValues.email)) {

                        customErrors.email = 'Formato de correo inválido.'
                    } else if (myValues.email != emailToVerify) {
                        customErrors.email = 'Email incorrecto.'

                    }

                    if (!myValues.password) {

                        customErrors.password = 'Campo obligatorio.'
                    } else if (myValues.password != passToVerify) {
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
                    JSON.parse(localStorage.getItem('formNameValues')) == null && localStorage.setItem('formNameValues', JSON.stringify(defaultValues))
                    modalCtx.changeSignUpForm(5)
                    console.log('datos verificados')

                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <Field name='email' type="text" placeholder="default: email@ejemplo.com" className="input input-primary" />
                            <ErrorMessage name='email' component={() => (<div style={{ 'color': 'red' }}>{errors.email}</div>)} />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Contraseña</span>
                            </label>
                            <Field name='password' type="password" placeholder="default: 12345" className="input input-primary" />

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