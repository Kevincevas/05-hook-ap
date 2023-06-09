import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Kevin',
        email:'kevin@gmail.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...formState,  //mantener el formulario
            [ name ]:value,  //cambiar el valor de los inputs
        })
    };

    //es una funcion para disparar efectos secundarios
    useEffect( () => {
        //console.log('useEffect Called');
    }, []);  //[]:vacio, se ejecuta cuando el componente se reenderiza por primera vez

    useEffect( () => {
        //console.log('formState changed');
    }, [formState]);

    useEffect( () => {
        //console.log('email changed');
    }, [email]);

    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
            />

            <input 
            type="email" 
            className='form-control mt-2'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onInputChange}
            />

            {
                (username === 'Kevin2') && <Message />  //si el usuario ya existe aparece el mensaje
            }

        </>
    )
}


