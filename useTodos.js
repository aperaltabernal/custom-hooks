import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

//FUNCION QUE UTILIZA EL useReduce PARA INICIALIZAR EL REDUCER
const init = () => {
    if(localStorage.getItem('todos')){
        //SE LEE DESDE EL LOCALSTORAGE
        return JSON.parse(localStorage.getItem('todos'));
    }else{
        return [];
    }
    
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, init());

    //AL ACTUALIZARSE EL todos ENTONCES EJECUTA EL EFECTO
    useEffect(() => {
        //GUARDAR EN EL LOCALSTORAGE: SOLO GUARDA STRINGS (key, value):
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const onAgregarTodo = ( todo ) => {
        console.log('onAgregarTodo');
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        //EJECUTA EL useReduce: SE EJECUTA EL todoReducer CON LA NUEVA ACCION
        dispatch(action);
    }

    const onEliminarTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        dispatch(action);
    }

    const onCambiarTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action);
    }

    return {
        todos,
        onAgregarTodo,
        onEliminarTodo,
        onCambiarTodo,
        totalTodos: todos.length,
        pendingTodos: todos.filter( todo => !todo.done).length,
    }
}