import React from "react";


const Form = ({setInputText, todos, setTodos, inputText, setStatus})=>{
//Above return(), we can write javaScript without using {}

    const InputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler =(e) =>{
        e.preventDefault(); // Stops the page to refresh everytime you press enter 
        setTodos([
            ...todos, //basically it is spreading the items in todos
            //to add new items
            {text: inputText, completed: false, id: Math.random() *1000}
        ]);
        setInputText(''); //This is used to reset the state to empty string
    };
    
    const statusHandler = (e) =>{
      //  console.log(e.target.value);
        setStatus(e.target.value); //Just updating the state so that I can access The filtered Lists
    };

    return(
     <form>
      <input value={inputText} onChange={InputTextHandler}  type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form> 
    );
};

export default Form;
