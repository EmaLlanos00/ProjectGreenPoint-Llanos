import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ModalContex } from '../../contexts/ModalContex';


const FormName = () => {//Parte 1 de formularios para crear cuenta. Ingreso de datos básicos por inputs.
    const modalCtx = useContext(ModalContex);

    return (
        <>
            <Formik
                initialValues={{
                    user: '',
                    lastName: '',
                    phone: ''
                }}
                validate={(myValues) => {
                    let customErrors = {};

                    if (!myValues.user) {
                        customErrors.user = 'Por favor escribe un nombre.'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(myValues.user)) {
                        customErrors.user = 'El nombre solo debe contener letras y espacios.'
                    }

                    if (!myValues.lastName) {
                        customErrors.lastName = 'Por favor escribe un apellido.'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(myValues.user)) {
                        customErrors.lastName = 'El nombre solo debe contener letras y espacios.'
                    }
                    if (!myValues.phone) {
                        customErrors.phone = 'Requerido.'
                    } else if (!/[0-9]/.test(myValues.phone)) {
                        customErrors.phone = 'Solo se permiten números.'
                    }
                    return customErrors
                }}
                onSubmit={(myValues, { resetForm }) => {
                    resetForm();
                    console.log(myValues)
                    localStorage.setItem('formNameValues', JSON.stringify(myValues))
                    console.log('formulario 1 enviado')
                    modalCtx.changeSignUpForm(2)
                }}>
                {({ errors }) => (
                    <Form>
                        <div className="form-control">
                            <label htmlFor='user' className='label'><span className='label-text'>Nombre</span></label>
                            <Field type='text' id='user' name='user' className="input input-primary" />
                            <ErrorMessage name='user' component={() => (<div style={{ 'color': 'red' }}>{errors.user}</div>)} />

                        </div>
                        <div className="form-control">
                            <label htmlFor='lastName' className='label'><span className='label-text'>Apellido</span></label>
                            <Field type='text' id='lastName' name='lastName' className="input input-primary" />
                            <ErrorMessage name='lastName' component={() => (<div style={{ 'color': 'red' }}>{errors.lastName}</div>)} />

                        </div>
                        <div className="form-control">
                            <label htmlFor='phone' className='label'><span className='label-text'>Teléfono</span></label>
                            <Field type='text' id='lastName' name='phone' placeholder='ej: 12345678' className="input input-primary" />
                            <ErrorMessage name='phone' component={() => (<div style={{ 'color': 'red' }}>{errors.phone}</div>)} />

                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Siguiente</button>
                        </div>


                    </Form>)}

            </Formik>
        </>
    )
}

export default FormName