import React, {useState, useEffect} from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  //State Stuffs
  const [inputText, setInputText] = useState('');
  const [todos,setTodos] = useState([]); // Here useState, an array of objects in here
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run Once the app start
  useEffect(() =>{
    getLocalTodos();
  }, []);

  //Use Effects
    useEffect(()=>{
      filterHandler();
      saveLocalTodos();
    },[todos, status]
    );

  //Functions

  const filterHandler = () =>{
    switch(status){
      case "completed": 
                        setFilteredTodos(todos.filter(todo => todo.completed === true));
                        break;

      case "uncompleted": setFilteredTodos(todos.filter(todo => todo.completed ===false));
                          break;
      default: setFilteredTodos(todos);break;
    }
  };

  //Save to local
  const saveLocalTodos = () =>{
  
      localStorage.setItem('todos',JSON.stringify(todos));
    
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal= JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
          <h3> My ToDo List!</h3>
          
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus} 
       />
      <ToDoList todos={todos} setTodos={setTodos}  filteredTodos={filteredTodos}  />
    </div>
  );
}

export default App;
