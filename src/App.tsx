// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import TypingTest from './components/TypingTest'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TypingTestPage from './pages/TypingTestPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TypingTestPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
