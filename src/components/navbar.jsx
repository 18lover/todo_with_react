
import { LuListTodo } from "react-icons/lu";

export const Navbar=()=>{
    return(
        <div className="container md:w-3/4 sm:w-full mt-1 mx-auto bg-black text-white py-2 rounded-lg px-3 ">
            <div className="header flex justify-between">
                <h1 className="font-extrabold flex gap-2 text-center "><LuListTodo className="h-full" /> ToDo List</h1>
                <ul className="flex gap-3 md:gap-8 cursor-pointer">
                    <li>Home</li>
                    <li>Your Task</li>
                </ul>
            </div>
        </div>
    )
}