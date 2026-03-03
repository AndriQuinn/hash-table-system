import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import InsertPage from './pages/InsertPage'
import SearchPage from "./pages/SearchPage";
import DeletePage from "./pages/DeletePage";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/insert" element={<InsertPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/delete" element={<DeletePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
