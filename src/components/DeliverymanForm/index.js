import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DeliverymanForm = () => {
    /* const validate = (values) => {
        const errors = {};
        // validates name
        if (!values.name){
            errors.name = 'Campo obrigatório';
        } else {
            if (values.name.length > 20){
                errors.name = 'Deve conter no máximo 20 caracteres';
            }
        }
        // validates email
        if (!values.email){
            errors.email = 'Campo obrigatório';
        } else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = 'E-mail inválido';
            }
        }
        // validates tel
        if (!values.tel){
            errors.tel = 'Campo obrigatório';
        } else {
            // https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828
            if (!/^\(?([0-9]{2})?\)?\s?[0-9]{5}-[0-9]{4}$/.test(values.tel)){
                errors.tel = 'Telefone inválido';
            }
        }

        // validates obs
        if (values.name){
            if (values.name.length > 50){
                errors.name = 'Deve conter no máximo 50 caracteres';
            }
        }
        return errors;
    } */

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            tel: '',
            obs: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Campo obrigatório'),
            email: Yup.string()
                .email('E-mail Inválido')
                .required('Campo obrigatório'),
            tel: Yup.string()
                .required('Campo obrigatório')
                .matches(/^\(?([0-9]{2})?\)?\s?[0-9]{5}-[0-9]{4}$/, { message: "Formato de telefone inválido" }),
            obs: Yup.string(),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formikObj.handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formikObj.handleChange}
                    onBlur={formikObj.handleBlur}
                    value={formikObj.values.name}
                />
                {formikObj.touched.name && formikObj.errors.name ? <label htmlFor="name">{formikObj.errors.name}</label> : null}
            </div>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formikObj.handleChange}
                    onBlur={formikObj.handleBlur}
                    value={formikObj.values.email}
                />
                {formikObj.touched.email && formikObj.errors.email ? <label htmlFor="email">{formikObj.errors.email}</label> : null}
            </div>
            <div>
                <label htmlFor="tel">Telefone: </label>
                <input
                    id="tel"
                    name="tel"
                    type="text"
                    onChange={formikObj.handleChange}
                    onBlur={formikObj.handleBlur}
                    value={formikObj.values.tel}
                />
                {formikObj.touched.tel && formikObj.errors.tel ? <label htmlFor="tel">{formikObj.errors.tel}</label> : null}
            </div>
            <div>
                <label htmlFor="obs">Observações: </label>
                <input
                    id="obs"
                    name="obs"
                    type="text"
                    onChange={formikObj.handleChange}
                    onBlur={formikObj.handleBlur}
                    value={formikObj.values.obs}
                />
                {formikObj.touched.obj && formikObj.errors.obs ? <label htmlFor="obs">{formikObj.errors.obs}</label> : null}
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DeliverymanForm;


/**
 * nome
 * cpf
 * e-mail
 * celular
 * observações
*/
