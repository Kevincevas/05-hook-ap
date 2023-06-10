import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const initialState = [
        

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    //guardando los ToDos en el local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo, 
        }

        dispatchTodo( action );
    }

    const handleDeleteTodo = ( id ) => {
        
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }


  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                
                <TodoAdd onNewTodo={handleNewTodo}/>

                
            </div>

            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
            </div>


        </div>

    </>
  )
}
