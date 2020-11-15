import React from 'react';

const Todo = ({text, todo, todos, setTodos}) =>{

    //Events
    const deleteHandler = () => {
            setTodos(todos.filter((el) => el.id !== todo.id)); // Filtering the state out and trying 
            //to find the element that mathes with whatever we clicked(Trash button) on
            //and if matches, it gets rid of it.
        };

    const completeHandler =() =>{
            setTodos(todos.map((item) =>{
                if(item.id === todo.id){
                    return{
                        ...item,completed: !item.completed //turning false to true 
                    }
                }
                return item;
            }))
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}` }>{text}</li>
            <button className="complete-btn" onClick={completeHandler} >
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            </button>

        </div>
    );
}

export default Todo;