import React, { useState } from 'react'
import './TodoList.css'

function TodoList() {
    const [todos,setTodos]=useState([]);
    const [inputValue,setInputValue]=useState('')
    const [isEditing, setEditing]=useState(false)
    const [editIndex,setIndexEdit]=useState(0)
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!isEditing){
            const ntodo={
                id:todos.length,
                text:inputValue,
                completed:false
            }
            setTodos([...todos,ntodo])
            setInputValue('')
            console.log(todos)
        }
        else{
            const etodos=[...todos]
            etodos[editIndex]['text']=inputValue
            setTodos(etodos)
            setEditing(false)
            setInputValue('')
            setIndexEdit(0)
        }
    }

    const handleDelete=(index)=>{
        console.log("clicked delete")
        console.log("index of removing item ",index)
        const tTodos=[...todos];
        console.log(tTodos[index])
        console.log(tTodos[index],"removed")
        tTodos.splice(index,1)
        setTodos(tTodos)
        console.log(todos)
    }

    const handleDone=(index)=>{
        console.log('done button clicked')
        const tempTodo=[...todos]
        console.log(tempTodo[index]['completed'])
        tempTodo[index]['completed']=true;
        setTodos(tempTodo)
        console.log(todos)
    }
   
    const handleEditing=(index)=>{   
        setInputValue(todos[index]["text"])
        setEditing(true)   
        setIndexEdit(index)
    }
    
  return (
    <div className='todo-list-container'>
        <div className='title'>
            <h1>To-Do List</h1>
            <h2>Plan, Record ,Check and increase your productivity from here</h2>
        </div>
      <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Write your todos....'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            className="input-field"
            id='input'/>
            <button type='submit' className='add-button'>Add Todo</button>
        </form>
      </div>
      <div className='todo-list-container' >
        <ul className='todo-list'>    
        {todos.map((item,index)=>{
          return (
            <div className='todo-item '>
                <li key={item.id} className={item.completed?"list-item-done":"list-item-undone"}>{item.text}</li>
                <div className='button-box'>
                    <button className='done-button' onClick={()=>handleDone(index)}></button>
                    <button className='delete-button' onClick={()=>handleDelete(index)}></button>
                    <button className='edit-button' onClick={()=>handleEditing(index)}></button>
                </div>
            </div>
            )
        })}
        </ul>
        
      </div>
    </div>
  )
}

export default TodoList
