import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

export const Todos=()=>{
    const [todo , setTodo] = useState('')
    const [todos ,setTodos] = useState([])
    const [mes ,setMes] = useState("shinde")

    
    useEffect(()=>{
        let todostring = localStorage.getItem('todos')
        if(todostring)
            {
                let todos = JSON.parse( localStorage.getItem('todos'));
                setTodos(todos);
            }
        },[])
        
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
        }, [todos])

    const handleEdit=()=>{
        setTodos([...todos , {id:Math.random(),todo , complete:false}])
        setTodo('')
    }

    const handleDelete=(e,id)=>{
        let newTodos = todos.filter(item=>{
            return item.id != id
        })
        setTodos(newTodos)
    }

    const handleUpdate=(e,id)=>{
        let item = todos.filter(item=> item.id == id)
        setTodo(item[0].todo)
        let newTodos = todos.filter(item=>{
            return item.id != id
        })
        setTodos(newTodos)
    }

    const handleComplete=(e)=>{
        const id = e.target.id
        const index = todos.findIndex(item=>{ return item.id == id}
        )
        let newTodos = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos)
    }

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    

    return(
        <div className="sm:container rounded-xl mx-auto  bg-blue-100 min-h-[80vh]  md:w-[100vh]  shadow-2xl shadow-black">
            <div className="input mt-8 p-3">
                <h1 className="font-bold">Add a ToDo</h1>
                <input type="text" onChange={handleChange} value={todo} placeholder="Add Your Todo" className="mt-2 px-2 w-3/4 bg-green-200 text-black border-2 border-black h-7 rounded-xl"/>
                <button onClick={handleEdit} disabled={todo.length <=3} className="bg-green-600 text-white px-3 rounded-lg h-7 ms-2 disabled:bg-red-300"><MdAddCircle /></button>
            </div>
            <p className="p-3 font-bold">Your ToDos</p>
            <div className="h-[1px] opacity-50 mx-5 bg-black"></div>
            {todos.length < 1 && <div className="ms-3">Todo is Empty</div> }
            {todos.map(item=>
            <div className="list p-3 flex " key={Math.random()}>
                <input type="checkbox" id={item.id} checked={item.complete}  onChange={handleComplete} className="me-2" />
                <div className= {item.complete?'line-through todo w-2/3 bg-transparent px-3 rounded-md ': 'todo w-2/3  bg-transparent px-3 rounded-md'  }>{item.todo}</div>
                
                <div className="button flex gap-1">
                    <button onClick={(e)=>handleUpdate(e,item.id)} className="bg-blue-800 text-white px-2 rounded-lg h-7 ms-2 "><FaEdit /></button>
                    <button onClick={(e)=>handleDelete(e,item.id)} className="bg-red-800 text-white px-2 rounded-lg h-7 ms-2"><MdDeleteForever /></button>
                </div>
            </div>
            )}
        </div>
    )
}