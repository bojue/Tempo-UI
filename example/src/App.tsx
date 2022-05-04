import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './../../packages/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button
        size={'large'}
        content={'确定'}
        />
    </div>
  )
}

export default App
