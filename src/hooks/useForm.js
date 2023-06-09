import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);    

    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...formState,  //mantener el formulario
            [ name ]:value,  //cambiar el valor de los inputs
        })
    };

    //Reset values
    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

