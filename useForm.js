import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState(
            {
                ...formState,
                [ name ]: value
            }
        );
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    //SE HACE SPREAD DEL FORMSTATE Y ASI ESPARSE LOS ATRIBUTOS
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}
