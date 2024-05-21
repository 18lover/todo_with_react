import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' min-h-[100vh] '>
      <Navbar/>
      <Todos/>
    </div>
    </>
  )
}

export default App
