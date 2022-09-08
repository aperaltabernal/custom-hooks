import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    console.log(url)
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const result = await fetch(url);
        const data = await result.json();
        setState({
            ...state,
            data,
            isLoading: false,
        });
    }
    
    useEffect
    useEffect(() => {
        getFetch();
    }, [url]);
    
    return {
        ...state
    };
}
