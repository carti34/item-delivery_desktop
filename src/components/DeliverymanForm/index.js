import React from 'react';
import { useFormik } from 'formik';

const DeliverymanForm = () => {
    const validate = (values) => {
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
        return errors;
    }
    
    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <form onSubmit={formikObj.handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formikObj.handleChange}
                    value={formikObj.values.name}
                />
                {formikObj.errors.name ? <label htmlFor="name">{formikObj.errors.name}</label> : null}
            </div>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formikObj.handleChange}
                    value={formikObj.values.email}
                />
                {formikObj.errors.email ? <label htmlFor="email">{formikObj.errors.email}</label> : null}
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
