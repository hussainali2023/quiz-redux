import { useState } from 'react'
import { Button } from '@material-tailwind/react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Button title='none' placeholder="enter your name" color='red'></Button>
   </>
  )
}

export default App
