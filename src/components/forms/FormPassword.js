import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import { ModalContex } from '../../contexts/ModalContex';


const FormPassword = () => {//Parte 3 de formularios para crear una cuenta. Verifica la igualdad de inputs y la extensión mínima.
    const modalCtx = useContext(ModalContex)

    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    checkPass: ''
                }}
                validate={myValues => {

                    let customErrors = {};

                    if (!myValues.password) {

                        customErrors.password = 'Campo obligatorio.'

                    } else if (myValues.password.length < 4) {

                        customErrors.password = 'Debe contener al menos 4 caracteres.'
                    }
                    if (!myValues.checkPass) {

                        customErrors.checkPass = 'Campo obligatorio.'

                    } else if (myValues.checkPass !== myValues.password) {

                        customErrors.checkPass = 'Las contraseñas no coinciden.'

                    }
                    return customErrors

                }}
                onSubmit={(myValues, { resetForm }) => {
                    console.log('formulario 3 enviado')
                    resetForm();
                    localStorage.setItem('formPasswordValues', JSON.stringify(myValues))
                    modalCtx.changeSignUpForm(4)
                }}
            >
                {({ errors }) => (
                    <>
                        <Form>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <Field type="password" placeholder="password" className="input input-primary" name="password" />
                                <ErrorMessage name="password" component={() => (<div style={{ 'color': 'red' }}>{errors.password}</div>)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repite contraseña</span>
                                </label>
                                <Field type="password" placeholder=" repite password" className="input input-primary" name="checkPass" />
                                <ErrorMessage name="checkPass" component={() => (<div style={{ 'color': 'red' }}>{errors.checkPass}</div>)} />
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

export default FormPassword