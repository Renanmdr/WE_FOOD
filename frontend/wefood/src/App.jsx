import { BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import { Home } from './components/pages/Home'
import { Register } from './components/pages/auth/Register'
import { Login } from './components/pages/auth/Login'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
