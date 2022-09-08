/*
    Un hook es:
        una simple función
        que retorna algo (un objeto, un arreglo, etc.)
        y esta asociado a algún hook interno de react

*/

import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter( counter  + value );
    }
    const decrement = (value = 1) => {
        if((counter - value) <= 0){
            setCounter( 0 );
            return;
        }

        setCounter( counter - value );
    }
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}