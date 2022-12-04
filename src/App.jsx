import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro'
import Login from './pages/login/login'

function App() {
  return (
  <Router>
<div className="App">

  <Routes>
        <Route path="/" exact element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>  

      </div>

</Router>
  );
}

export default App;
