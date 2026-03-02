import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import InsertPage from './pages/InsertPage'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/insert" element={<InsertPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
